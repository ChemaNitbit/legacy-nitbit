import React from 'react';
import {PaperProvider, Text} from 'react-native-paper';
import {MessagesRootStackParamList} from '../../../navigation/navigators/MessagesTabNavigator/MessagesRootStackParamList';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FlatList, TouchableOpacity} from 'react-native';

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
    <PaperProvider>
      <FlatList
        data={fakeChats(20)}
        renderItem={chat => (
          <TouchableOpacity onPress={() => goToChat(chat.item.id)}>
            <Text>Chat</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </PaperProvider>
  );
};
