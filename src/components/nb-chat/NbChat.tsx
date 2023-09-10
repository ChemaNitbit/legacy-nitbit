import * as React from 'react';
import {MessageType} from '../../@types/chat.type';

import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {useCurrentUser} from '../../hooks/useCurrentUser';
import {SafeAreaView} from 'react-native-safe-area-context';

type NbChatPropsType = {
  messages?: MessageType[];
};

const NbChat: React.FC<NbChatPropsType> = ({messages}) => {
  const {currentUser} = useCurrentUser();

  // console.log('uid: ', currentUser?.uid);

  return (
    <View style={{width: '100%'}}>
      <SafeAreaView
        style={{
          height: '100%',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
          backgroundColor: 'white',
        }}>
        <ScrollView
          contentContainerStyle={[
            styles.container,
            {flexGrow: 1, justifyContent: 'flex-end', alignItems: 'flex-end'},
          ]}>
          {messages?.map((message: MessageType) => (
            <View
              key={message.id}
              style={[
                styles.messageContainer,
                {
                  alignSelf:
                    message.senderId === currentUser?.uid
                      ? 'flex-end'
                      : 'flex-start',
                  backgroundColor:
                    message.senderId === currentUser?.uid ? 'blue' : 'green',
                },
              ]}>
              <Text style={styles.messageText}>{message.message}</Text>
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 16,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  messageContainer: {
    borderRadius: 8,
    padding: 8,
    marginBottom: 8,
    maxWidth: '80%',
  },
  messageText: {
    color: 'white',
  },
});

export default NbChat;
