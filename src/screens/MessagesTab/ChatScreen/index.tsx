import React from 'react';
import {View, Text} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import {MessagesRootStackParamList} from '../../../navigation/navigators/MessagesTabNavigator/MessagesRootStackParamList';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export const ChatScreen = (
  props: NativeStackScreenProps<MessagesRootStackParamList, 'ChatScreen'>,
): JSX.Element => {
  return (
    <PaperProvider>
      <View>
        <Text>Chat {props.route.params?.chatId}</Text>
      </View>
    </PaperProvider>
  );
};
