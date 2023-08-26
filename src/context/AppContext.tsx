import * as React from 'react';
import {Post} from '../@types/post.type';
import {useFetchPosts} from '../hooks/usePosts';
import {
  StorageError,
  UploadTaskSnapshot,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';
import {storage, firestoreDB} from '../shared/infrastructure/firebase-config';
import {User, getAuth, updateProfile} from 'firebase/auth';
import {doc, updateDoc} from 'firebase/firestore';

import {addPost} from '../services/post.service';

export type AppContextType = {
  posts: Post[];
  isLoadingPosts: boolean;
  addNewPost: (post: Post, navigation: any) => void;
  changeProfilePhoto: (uri: string) => void;
};

export type AppProviderProps = {
  children: React.ReactNode;
};

export const AppContext = React.createContext<AppContextType | null>(null);

export const useAppContext = () => {
  return React.useContext(AppContext);
};

export const AppProvider: React.FC<AppProviderProps> = ({children}) => {
  const {posts, isLoadingPosts} = useFetchPosts();

  const addNewPost = (post: Post, navigation: any): void => {
    addPost(post).then(() => {
      navigation.goBack();
    });
  };

  const changeProfilePhoto = (uri: string) => {
    const changeImage = async () => {
      const responseURI = await fetch(uri);
      const blob = await responseURI.blob();
      const filename = `${Date.now()}.jpg`;
      const storageRef = ref(storage, `profiles/${filename}`);
      const uploadTask = uploadBytesResumable(storageRef, blob);

      uploadTask.on(
        'state_changed',
        (snapshot: UploadTaskSnapshot) => {
          // console.log("uploadTask.snapshot.state : ", snapshot.state);
        },
        (error: StorageError) => {
          // console.log("uploadTask.error : ", error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(
            async (downloadURL: string) => {
              const authUser = getAuth();
              const currentUser = authUser.currentUser as User;
              await updateProfile(currentUser, {photoURL: downloadURL});
              const docProfileRef = doc(firestoreDB, 'users', currentUser?.uid);
              await updateDoc(docProfileRef, {profilePhoto: downloadURL});
            },
          );
        },
      );
    };

    changeImage();
  };

  const appContextValue: AppContextType = {
    posts,
    isLoadingPosts,
    addNewPost,
    changeProfilePhoto,
  };

  return (
    <AppContext.Provider value={appContextValue}>
      {children}
    </AppContext.Provider>
  );
};
