import { useEffect, useState } from "react"
import { fetchPosts } from "../services/post.service"
import { Post } from "../@types/post.type";

export const useFetchPosts = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDate = async () => {

            fetchPosts()
                .then((posts: Post[]) => setPosts(posts.length ? posts : []))
                .finally(() => setLoading(false));

        }

        fetchDate();

    }, []);

    return { posts, isLoading };
}

