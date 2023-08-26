import {Post} from '../@types/post.type';

import {firestoreDB} from '../shared/infrastructure/firebase-config';
import {
  Firestore,
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
} from 'firebase/firestore';
import {UserType} from '../@types/user.type';
import {POSTS, USERS} from './collections';

export const fetchPosts = async (): Promise<Post[]> => {
  let posts: Post[] = [];

  const docRef = collection(firestoreDB, POSTS);

  const querySnapshot = await getDocs(docRef);

  for (const post of querySnapshot.docs) {
    const userDetails = await fetchUserById(post.data().idUser);
    const postDetails = {
      id: post.id,
      ...post.data(),
      createAt: post.data()?.createAt.toDate(),
      user: userDetails,
    } as Post;
    posts.push(postDetails);
  }

  return posts;
};

// export const fetchPostsRealtime = async () => {
//     let posts: Post[] = [];
//     const collectionRef = collection(firestoreDB, POSTS);

//     await onSnapshot(collectionRef, (querySnapshot) => {

//         const iterate = async () => {
//             for (const post of querySnapshot.docs) {
//                 console.log("> ", post.data());
//                 const userDetails = await fetchUserById(post.data().idUser);
//                 const postDetails = { id: post.id, ...post.data(), createAt: post.data()?.createAt.toDate(), user: userDetails } as Post;
//                 posts.push(postDetails);
//             }
//         }

//         iterate();
//     });

//     console.log("data: ", posts);

//     return posts;
// }

export const fetchPostsRealtime = async () => {
  const posts: Post[] = [];
  const postIds = new Set<string>();
  const collectionRef = collection(firestoreDB, POSTS);

  const byQuery = query(collectionRef, orderBy('createAt', 'desc'));

  const querySnapshot = await getDocs(byQuery);

  const iterate = async () => {
    for (const post of querySnapshot.docs) {
      const userDetails = await fetchUserById(post.data().idUser);
      const postDetails = {
        id: post.id,
        ...post.data(),
        createAt: post.data()?.createAt.toDate(),
        user: userDetails,
      } as Post;
      posts.push(postDetails);
      postIds.add(post.id);
    }
  };

  await iterate();

  const unsubscribe = onSnapshot(
    collectionRef,
    {includeMetadataChanges: true},
    async snapshot => {
      const source = snapshot.metadata.fromCache ? 'Local Cache' : 'Server';

      console.log('from: ', source);

      snapshot.docChanges().forEach(async change => {
        if (change.type === 'added') {
          const post = change.doc;
          if (!postIds.has(post.id)) {
            console.log('> New post: ', post.data());
            const userDetails = await fetchUserById(post.data().idUser);
            const postDetails = {
              id: post.id,
              ...post.data(),
              createAt: post.data()?.createAt.toDate(),
              user: userDetails,
            } as Post;
            posts.push(postDetails);
            postIds.add(post.id);
          }
        }
      });
    },
  );

  return new Promise<Post[]>(resolve => {
    unsubscribe();
    resolve(posts);
  });
};

export const fetchUserById = async (id: string): Promise<UserType | null> => {
  const docRef = await doc(firestoreDB, USERS, id);
  const user = await getDoc(docRef);
  return user.exists() ? (user.data() as UserType) : null;
};

export const addPost = (post: Post): Promise<void> => {
  const postsRef = collection(firestoreDB, 'posts');
  return new Promise<void>((resolve, reject) => {
    addDoc(postsRef, post)
      .then(response => {
        resolve();
      })
      .catch(error => reject(error));
  });
};
