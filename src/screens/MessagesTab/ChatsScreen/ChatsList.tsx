import React from 'react';
import {Text} from 'react-native-paper';
import {MessagesRootStackParamList} from '../../../navigation/navigators/MessagesTabNavigator/MessagesRootStackParamList';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {TouchableOpacity} from 'react-native';

export interface ChatsListProps {
  virtualList: boolean;
}

export const ChatsList = (
  props: NativeStackScreenProps<
    MessagesRootStackParamList,
    'ChatsScreen' | 'ConnectionsChatsScreen' | 'GeoFencesChatsScreen'
  >,
): JSX.Element => {
  const goToChat = (chatId: string) => {
    props.navigation.navigate('ChatScreen', {chatId});
  };

  const fakeChats = (length: number) => {
    return Array.from({length}, () => ({id: Math.random().toString()}));
  };

  return (
    <>
      {fakeChats(80).map(chat => (
        <TouchableOpacity key={chat.id} onPress={() => goToChat(chat.id)}>
          <Text>Chat</Text>
        </TouchableOpacity>
      ))}
    </>
  );
};
