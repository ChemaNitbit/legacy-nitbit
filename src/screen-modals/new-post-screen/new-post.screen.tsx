import * as React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-paper';

import { TextInput } from "@react-native-material/core";

import { Picker } from '@react-native-picker/picker';
import { Post } from '../../@types/post.type';

import { firestoreDB } from '../../../firebase-config';
import { collection, addDoc } from 'firebase/firestore';

const NewPost = ({ navigation, route }: any) => {

    const [selectedLanguage, setSelectedLanguage] = React.useState<string>('');

    const [post, setPost] = React.useState<string>('');

    const photoURL: string = route.params.photoURL;

    const userId: string = route.params.userId;

    const handlePrivacySelect = (value: string) => {
        setSelectedLanguage(value);
    }

    const handleSavePost = () => {


        const postsRef = collection(firestoreDB, 'posts');


        const newPost: Post = {
            idUser: userId,
            description: post,
            title: 'Test from App',
            createAt: new Date(),
        }

        addDoc(postsRef, newPost).then((response) => {
            setPost('');
            navigation.goBack();
        }).catch((error) => console.log("newPost::Error: ", error));
    }

    return (
        <View style={{ padding: 10, display: 'flex', gap: 25 }}>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', height: 60 }}>
                <View style={{ width: '20%', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                    <Image style={styles.roundedImage} source={{ uri: photoURL }} />
                </View>
                <View style={{ width: '80%', height: '100%' }}>
                    <Picker
                        mode='dropdown'
                        selectedValue={selectedLanguage}
                        onValueChange={(itemValue) =>
                            handlePrivacySelect(itemValue)
                        }>
                        <Picker.Item label="Amigos" value="friends" />
                        <Picker.Item label="Solo yo" value="OnlyMe" />
                    </Picker>
                </View>
            </View>

            <View style={{ display: 'flex', flexDirection: 'column' }}>
                <TextInput variant='standard' multiline placeholder='Comparte lo que quieras' numberOfLines={5} textAlignVertical='top' style={{ maxHeight: 5 * 20 }} onChangeText={setPost} value={post} />
                <Text style={{ width: '100%', textAlign: 'right' }}>180 Caracteres</Text>
            </View>

            <View>
                <Button mode='elevated' buttonColor='#5AB0D6' textColor='#fff' onPress={handleSavePost}>Publicar</Button>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    roundedImage: {
        width: 50, height: 50, borderRadius: 25
    }
})

export default NewPost;