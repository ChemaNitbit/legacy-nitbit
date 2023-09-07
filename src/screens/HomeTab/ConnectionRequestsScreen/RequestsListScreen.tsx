import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text} from 'react-native';
import {RootStackParamList} from '../../../navigation/RootStackParamList';
import {Button} from 'react-native-paper';

export interface RequestsListScreenProps {
  type?: 'direct' | 'geofences';
}

export const RequestsListScreen = (
  props: NativeStackScreenProps<RootStackParamList, 'RequestsListScreen'>, // this "any" allows the TopTab navigator to accept the same screen component for both tabs
): JSX.Element => {
  const generateRandomId = () => {
    return Math.floor(Math.random() * 1000);
  };

  const chatButtons = {
    direct: (
      <Button
        onPress={() =>
          props.navigation.navigate('ChatScreen', {
            chatId: generateRandomId().toString(),
          })
        }>
        Ir a un Chat
      </Button>
    ),
    geofences: (
      <Button
        onPress={() =>
          props.navigation.navigate('ChatScreen', {
            chatId: generateRandomId().toString(),
          })
        }>
        Ir a un Chat
      </Button>
    ),
    undefined: null,
  };

  const requestType = props.route.params?.type;

  return (
    <View>
      <Text>RequestsListScreen: {requestType}</Text>
      {requestType ? chatButtons[requestType] : null}
    </View>
  );
};
