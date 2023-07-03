import React from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import { Post } from "../../@types/post.type";
import { useFetchPosts } from "../../hooks/usePosts"
import PostCard from '../nb-post-card/NbPostCard';

export interface NbListProps {
    posts: Post[];
    isLoading: boolean;
}

const NbList: React.FC<any> = () => {

    const { posts, isLoading } = useFetchPosts();

    if (isLoading) return <Text>Loading...</Text>

    return (

        <View style={{ width: '100%' }}>
            <SafeAreaView style={styles.screenContainer}>

                <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-start', alignItems: 'center' }} style={styles.scrollContainer}>
                    {
                        posts.map((post: Post) => {
                            return (
                                <PostCard key={post.id} post={post} />
                            )
                        })
                    }
                </ScrollView>

            </SafeAreaView>

        </View>

    )
}

export const styles = StyleSheet.create({
    screenContainer: {
        height: '100%',
        display: 'flex',
        backgroundColor: 'white',
    },
    scrollContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    headerContainer: {
        width: '100%',
        height: 180,
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        width: '87%',
        height: 'auto',
        backgroundColor: '#ffffff',
        gap: 25
    }
});

export default NbList;

{/* <Text>{post.createAt?.toLocaleString("es-MX", { day: '2-digit', month: "short", year: 'numeric', hour: 'numeric', minute: 'numeric' })}</Text> */ }
