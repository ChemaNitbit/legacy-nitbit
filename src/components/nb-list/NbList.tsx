import React from 'react';
import { View, Text } from 'react-native';
import { Post } from "../../@types/post.type";
import { useFetchPosts } from "../../hooks/usePosts"
import PostCard from '../nb-post-card/NbPostCard';

const NbList = () => {

    const { posts, isLoading } = useFetchPosts();

    if (isLoading) return <Text>Loading...</Text>

    return (

        <View style={{ width: '100%' }}>
            {
                posts.map((post: Post) => {
                    return (
                        <PostCard key={post.id} post={post} />
                    )
                })
            }
        </View>

    )
}

export default NbList;

{/* <Text>{post.createAt?.toLocaleString("es-MX", { day: '2-digit', month: "short", year: 'numeric', hour: 'numeric', minute: 'numeric' })}</Text> */ }
