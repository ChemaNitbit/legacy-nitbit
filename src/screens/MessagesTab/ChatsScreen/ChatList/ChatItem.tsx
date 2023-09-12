import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {NbUserBadge} from '../../../../components';
import {Chat} from '../../../../shared/domain/chat';
import {NewMessageIndicator} from './NewMessageIndicator';

interface ChatItemProps {
  chat: Chat;
  timeAgoLabel: string;
  onPress: ({chatId}: {chatId: string}) => void;
}

export const ChatItem = ({chat, onPress, timeAgoLabel}: ChatItemProps) => {
  return (
    <TouchableOpacity
      key={chat.id}
      style={styles.container}
      onPress={() => onPress({chatId: chat.id})}>
      <NbUserBadge
        title={chat.user.name}
        imgUser={chat.user.photoUrl}
        secondaryLabel={chat.lastMessage.plainMessage}
      />
      <View style={{}}>
        <Text style={{fontSize: 10, fontWeight: '600'}}>{timeAgoLabel}</Text>
        <NewMessageIndicator read={chat.lastMessage.read} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  rightContainer: {
    gap: 8,
    display: 'flex',
    alignItems: 'flex-end',
    flexDirection: 'column',
    justifyContent: 'center',
  },
});
