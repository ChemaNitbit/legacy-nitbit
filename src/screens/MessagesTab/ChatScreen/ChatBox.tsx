import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import {getTimeFromISOString} from '../../../shared/application/utils/get-time-from-iso-string';

export const ChatBox = ({message, isMe, createdAt}: any): JSX.Element => {
  const styles = StyleSheet.create({
    text: {
      color: isMe ? '#fff' : '#000',
      textAlign: isMe ? 'right' : 'left',
    },
  });
  return (
    <View
      style={{
        backgroundColor: isMe ? '#8E54E9' : '#E5E5E5',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
        alignSelf: isMe ? 'flex-end' : 'flex-start',
        maxWidth: '80%',
        minWidth: '20%',
      }}>
      <Text style={styles.text}>{message}</Text>
      <Text style={styles.text}>{getTimeFromISOString(createdAt)}</Text>
    </View>
  );
};
