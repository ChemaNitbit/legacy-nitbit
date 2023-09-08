import React from 'react';
import {Button, PaperProvider, Text} from 'react-native-paper';
import {MessagesRootStackParamList} from '../../../navigation/navigators/MessagesTabNavigator/MessagesRootStackParamList';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export const ChatsList = (
  props: NativeStackScreenProps<
    MessagesRootStackParamList,
    'ChatsScreen' | 'ConnectionsChatsScreen' | 'GeoFencesChatsScreen'
  >,
): JSX.Element => {
  const goToChat = (chatId: string) => {
    props.navigation.navigate('ChatScreen', {chatId});
  };
  return (
    <PaperProvider>
      <Text>ChatsList</Text>
      <Button onPress={() => goToChat('chatId')}>Go to a chat</Button>
    </PaperProvider>
  );
};
