import { Post } from "../@types/post.type";

import { firestoreDB } from "../../firebase-config";
import { Firestore, collection, doc, getDoc, getDocs, onSnapshot } from "firebase/firestore";
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

    const querySnapshot = await getDocs(collectionRef);

    const iterate = async () => {
        console.log("Data: ", querySnapshot.docs);
        for (const post of querySnapshot.docs) {
            console.log("> ", post.data());
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

    const unsubscribe = onSnapshot(collectionRef, async (snapshot) => {
        snapshot.docChanges().forEach(async (change) => {
            if (change.type === "added") {
                const post = change.doc;
                if (!postIds.has(post.id)) {
                    console.log("> New post: ", post.data());
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
    });

    return new Promise<Post[]>((resolve) => {
        resolve(posts);
    });
};

export const fetchUserById = async (id: string): Promise<User | null> => {
    const docRef = await doc(firestoreDB, USERS, id);
    const user = await getDoc(docRef);
    return user.exists() ? user.data() as User : null;
}