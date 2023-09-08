import React from 'react';
import {PaperProvider, Text} from 'react-native-paper';
import {ChatsList} from '../ChatsList';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MessagesRootStackParamList} from '../../../../navigation/navigators/MessagesTabNavigator/MessagesRootStackParamList';

export const ConnectionsChatsScreen = (
  props: NativeStackScreenProps<
    MessagesRootStackParamList,
    'ConnectionsChatsScreen'
  >,
): JSX.Element => {
  return (
    <PaperProvider>
      <Text>ConnectionsChatsScreen</Text>
      <ChatsList {...props} />
    </PaperProvider>
  );
};
