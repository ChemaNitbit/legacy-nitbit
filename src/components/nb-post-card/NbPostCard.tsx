import * as React from 'react';

import { Flex, Box } from "@react-native-material/core";
import { Image, StyleSheet, Text } from 'react-native';

const PostCard = ({ post }: any) => {
    return (
        <Flex fill direction='row' style={styles.container}>

            <Box style={styles.imageProfileContainer}>
                <Image source={{ uri: post.user.profilePhoto }} style={styles.roundedImage} />
            </Box>
            <Box style={styles.postContainer}>
                <Text style={styles.profileText}>{post.user.name} {post.user.lastname}</Text>
                <Text style={styles.postText}>{post.description}</Text>
            </Box>

        </Flex>
    )
}

const styles = StyleSheet.create({
    container: {
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
    roundedImage: {
        width: 75,
        height: 75,
        borderRadius: 37.5
    },
    postContainer: {
        flex: 6,
        display: 'flex',
        flexDirection: 'column',
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