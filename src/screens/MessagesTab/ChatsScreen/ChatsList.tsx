import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ChatItem} from './ChatItem';
import {MessagesRootStackParamList} from '../../../navigation/navigators/MessagesTabNavigator/MessagesRootStackParamList';

export interface ChatsListProps {
  virtualList: boolean;
}

export const ChatsList = (
  props: NativeStackScreenProps<
    MessagesRootStackParamList,
    'ChatsScreen' | 'ConnectionsChatsScreen' | 'GeoFencesChatsScreen'
  >,
): JSX.Element => {
  const goToChat = ({chatId}: {chatId: string}) => {
    props.navigation.navigate('ChatScreen', {chatId});
  };

  const fakeChats = (length: number) => {
    return Array.from({length}, () => ({
      id: Math.random().toString(),
      user: {
        id: Math.random().toString(),
        name: 'Marjoury',
        photoUrl: 'https://picsum.photos/200/300',
      },
      lastMessage: {
        plainMessage: 'Hola! Cómo estás?',
        rawMessage: 'Hola! Cómo *estás*?',
        sentDate: new Date().toISOString(),
        // randomize if is th
        read: Math.random() > 0.5,
      },
    }));
  };

  return (
    <>
      {fakeChats(80).map(chat => (
        <ChatItem key={chat.id} chat={chat} onPress={goToChat} />
      ))}
    </>
  );
};
