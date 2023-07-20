import * as React from 'react';

import { Flex, Box } from "@react-native-material/core";
import { StyleSheet, Text } from 'react-native';
import NbAvatar from '../nb-avatar/NbAvatar';
import { Post } from '../../@types/post.type';

export interface PostCardProps {
    post: Post
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
    return (
        <Flex fill direction='row' style={styles.container}>
            <Box style={styles.imageProfileContainer}>
                <NbAvatar url={post.user ? post.user.profilePhoto : undefined} size={75} />
            </Box>
            <Box style={styles.postContainer}>
                <Text style={styles.postText}>{post.description}</Text>
                <Text style={styles.profileText}>{post?.user?.name} {post?.user?.lastname}</Text>
            </Box>
        </Flex>
    )
}

const styles = StyleSheet.create({
    container: {
        maxHeight: 75,
        gap: 10,
        paddingHorizontal: 25,
        marginVertical: 20
    },
    imageProfileContainer: {
        flex: 2,
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center'
    },
    postContainer: {
        flex: 6,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        gap: 10
    },
    profileText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18,
        fontFamily: 'Roboto',
        lineHeight: 20,
        textAlign: 'left'
    },
    postText: {
        color: 'black',
        fontSize: 18,
        fontFamily: 'Roboto',
        lineHeight: 20,
        textAlign: 'left'
    }
})

export default PostCard;