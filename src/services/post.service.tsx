import { Post } from "../@types/post.type";

import { firestoreDB } from "../../firebase-config";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { User } from "../@types/user.type";
import { POSTS, USERS } from "./collections";

export const fetchPosts = async (): Promise<Post[]> => {
    let posts: Post[] = [];

    const docRef = collection(firestoreDB, POSTS);

    const querySnapshot = await getDocs(docRef);

    for (const post of querySnapshot.docs) {
        const userDetails = await fetchUserById(post.data().idUser);
        const postDetails = { id: post.id, ...post.data(), createAt: post.data()?.createAt.toDate(), user: userDetails } as Post;
        posts.push(postDetails);
    }

    return posts;
}

export const fetchUserById = async (id: string): Promise<User | null> => {
    const docRef = await doc(firestoreDB, USERS, id);
    const user = await getDoc(docRef);
    return user.exists() ? user.data() as User : null;
}