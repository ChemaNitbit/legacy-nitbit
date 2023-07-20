import { useEffect, useState } from "react"
import { fetchPostsRealtime } from "../services/post.service"
import { Post } from "../@types/post.type";

export const useFetchPosts = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    const [isLoadingPosts, setLoadingPosts] = useState(true);

    useEffect(() => {
        const fetchDate = async () => {

            fetchPostsRealtime()
                .then((posts: Post[]) => setPosts(posts.length ? posts : []))
                .finally(() => setLoadingPosts(false));

        }

        // fetchDate();

    }, []);

    return { posts, isLoadingPosts };
}

