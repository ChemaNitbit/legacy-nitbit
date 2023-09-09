import React from 'react';
import {PaperProvider, Text} from 'react-native-paper';
import {ChatsList} from '../ChatsList';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MessagesRootStackParamList} from '../../../../navigation/navigators/MessagesTabNavigator/MessagesRootStackParamList';
import {ConnectionUpdatesList} from './ConnectionUpdatesList';
import {SearchBar} from './SearchBar';

export const ConnectionsChatsScreen = (
  props: NativeStackScreenProps<
    MessagesRootStackParamList,
    'ConnectionsChatsScreen'
  >,
): JSX.Element => {
  return (
    <PaperProvider>
      <Text>ConnectionsChatsScreen</Text>
      <ConnectionUpdatesList />
      <SearchBar />
      <ChatsList {...props} />
    </PaperProvider>
  );
};
