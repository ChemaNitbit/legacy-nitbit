import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {PaperProvider, Text} from 'react-native-paper';
import {MessagesRootStackParamList} from '../../../../navigation/navigators/MessagesTabNavigator/MessagesRootStackParamList';
import {ChatsList} from '../ChatList';

export const GeoFencesChatsScreen = (
  props: NativeStackScreenProps<
    MessagesRootStackParamList,
    'GeoFencesChatsScreen'
  >,
): JSX.Element => {
  return (
    <PaperProvider>
      <Text>GeoFencesChatsScreen</Text>
      <ChatsList {...props} />
    </PaperProvider>
  );
};
