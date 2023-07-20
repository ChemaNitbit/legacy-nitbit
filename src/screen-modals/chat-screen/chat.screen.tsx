import * as React from 'react';
import { View, SafeAreaView, Image, KeyboardAvoidingView } from 'react-native';
import { IconButton, Text } from 'react-native-paper';
import { TextInput } from 'react-native-paper';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ChatType, MessageType } from '../../@types/chat.type';
import NbChat from '../../components/nb-chat/NbChat';
import NbAvatar from '../../components/nb-avatar/NbAvatar';
import { IMAGE_DEFAULT } from '../../contants';
import chatMessageService from '../../services/chat/chatMessageService';
import { collection, limit, onSnapshot, orderBy, query } from 'firebase/firestore';
import { firestoreDB } from '../../../firebase-config';
import userService from '../../services/users/userService';
import { UserType } from '../../@types/user.type';

const ChatScreen = ({ navigation, route }: any) => {

    const [text, setText] = React.useState<string>('');
    const [chatData, setChatData] = React.useState<ChatType>();
    const [messages, setMessages] = React.useState<MessageType[]>([]);
    const [chatId, setChatId] = React.useState<string>('');
    const [targetUser, setTargetUser] = React.useState<UserType | null>(null);

    React.useEffect(() => {
        const chatId: string = route.params.chatId;
        setChatId(chatId);
        getChatById(chatId);

        const q = query(
            collection(firestoreDB, `chats/${chatId}/messages`),
            orderBy('createdAt', 'asc'),
            limit(20)
        );

        const unsubscribeMessages = onSnapshot(q, (snapshot) => {
            let messagesChat: MessageType[] = [];
            snapshot.forEach((message) => {
                messagesChat.push({ id: message.id, ...message.data() } as MessageType);
            })
            setMessages(messagesChat);
        });

        return () => unsubscribeMessages();

    }, []);


    const getChatById = (chatId: string): void => {
        try {
            const chat = async () => {
                const response = await chatMessageService.getChatById(chatId);
                setChatData(response);
                getUserById(response.recipientId);
            }

            chat();
        } catch (error) {
            console.error(error);
        }
    }

    const getUserById = (userId: string): void => {
        try {
            const user = async () => {
                const response = await userService.getUserById(userId);

                // console.log("TargetUser: ", response);

                setTargetUser(response);
            }

            user();
        } catch (error) {
            console.error(error);
        }
    }

    const onSendMessage = () => {
        try {
            const message = async () => {
                const responseNewMessage = await chatMessageService.sendNewMessage(chatId, text);
                // console.log("onSendMessage: ", responseNewMessage);
                if (!!responseNewMessage) {
                    setText('');
                }
            }
            message();
        } catch (error) {
            console.error(`${error}`);
        }
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <KeyboardAvoidingView style={{ flex: 1, backgroundColor: '#fff' }}>
                <KeyboardAwareScrollView contentContainerStyle={{ flex: 1 }} keyboardShouldPersistTaps="handled">
                    <View style={{ flex: 1, minHeight: 40, maxHeight: 45, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: 10, flex: 1, paddingHorizontal: 10, width: '100%' }}>
                            <NbAvatar url={targetUser?.profilePhoto as string} size={30}></NbAvatar>
                            <Text>{targetUser?.name} {targetUser?.lastname}</Text>
                        </View>
                    </View>

                    <View style={{ flex: 1, flexShrink: 2, flexGrow: 3, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10 }}>
                            <NbAvatar url={targetUser?.profilePhoto as string} size={71} />
                            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#000000' }}>Miguel Romero</Text>
                                <Text style={{ fontSize: 12, color: '#BBBBBB', fontStyle: 'italic' }}>Amigo</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ flex: 1, flexGrow: 8 }}>
                        <NbChat messages={messages}></NbChat>
                    </View>

                </KeyboardAwareScrollView>
                <View style={{ padding: 10, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ display: 'flex', flexDirection: 'row', borderRadius: 25, backgroundColor: '#ddd', width: '100%', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
                        <TextInput
                            style={{ flex: 1, margin: 0, padding: 0, backgroundColor: '#ddd' }}
                            mode='flat'
                            placeholder='Enviar mensaje...'
                            value={text}
                            onChangeText={text => setText(text)}
                        />
                        <IconButton icon='send' onPress={onSendMessage} />
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default ChatScreen;