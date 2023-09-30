import React, {useLayoutEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {PaperProvider, Text} from 'react-native-paper';
import {MessagesRootStackParamList} from '../../../navigation/navigators/MessagesTabNavigator/MessagesRootStackParamList';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {NbTextInput} from '../../../components/nb-text-input';
import NBButton from '../../../components/nb-button/NBButton';
import {ChatBox} from './ChatBox';
import {ChatHeaderNavigationOptions} from '../../../navigation/navigators/MessagesTabNavigator/ChatHeader';
import {ChatType} from '../ChatsScreen/ChatList';

export interface ChatScreenProps
  extends NativeStackScreenProps<MessagesRootStackParamList, 'ChatScreen'> {
  navigation: NativeStackNavigationProp<
    MessagesRootStackParamList,
    'ChatScreen'
  > & {
    setOptions: (options: ChatHeaderNavigationOptions) => void;
  } & {
    chatType: ChatType;
  };
}

export const ChatScreen = (props: ChatScreenProps): JSX.Element => {
  useLayoutEffect(() => {
    props.navigation.setOptions({
      chat: {
        id: '',
        user: {
          id: '',
          name: '',
          photoUrl: '',
        },
        lastMessage: {
          plainMessage: '',
          rawMessage: '',
          sentDate: '',
          read: false,
        },
      },
      actions: {
        allowBlock: true,
        allowRemove: true,
        allowMakePermanentConnection:
          props.route.params?.chatType === 'GEOFENCE',
      },
    });
  }, [props.navigation, props.route.params?.chatType]);

  return (
    <PaperProvider>
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          padding: 16,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}>
        <ChatBox
          message="Hola"
          isMe={false}
          createdAt={new Date().toISOString()}
        />
        <ChatBox
          message="Hola"
          isMe={true}
          createdAt={new Date().toISOString()}
        />
        <Text style={{color: '#BBBBBB', textAlign: 'center'}}>
          29 oct. 12:25 p.m.
        </Text>
        <View style={styles.container}>
          <View style={{flex: 1}}>
            <NbTextInput
              placeholder="Enviar mensaje..."
              leftAction={{
                iconName: 'comment-outline',
              }}
            />
          </View>
          <NBButton iconName="send" rounded iconColor="white" />
        </View>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    gap: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: '#F2F2F2',
    borderRadius: 20,
    paddingHorizontal: 10,
  },
});
