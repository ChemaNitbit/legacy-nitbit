import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {NbUserBadge} from '../../../components';
import {Chat} from '../../../shared/domain/chat';

const NewMessageIndicator = ({read}: {read: boolean}) => {
  return (
    <View
      style={{
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: read ? 'transparent' : '#8E54E9',
      }}
    />
  );
};

interface ChatItemProps {
  chat: Chat;
  timeAgoLabel: string;
  onPress: ({chatId}: {chatId: string}) => void;
}

export const ChatItem = ({chat, onPress, timeAgoLabel}: ChatItemProps) => {
  return (
    <TouchableOpacity
      key={chat.id}
      style={{
        marginBottom: 16,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
      }}
      onPress={() => onPress({chatId: chat.id})}>
      <NbUserBadge
        imgUser="https://picsum.photos/200/300"
        title={chat.user.name}
        secondaryLabel={chat.lastMessage.plainMessage}
      />
      <View
        style={{
          gap: 8,
          display: 'flex',
          alignItems: 'flex-end',
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 10, fontWeight: '600'}}>{timeAgoLabel}</Text>
        <NewMessageIndicator read={chat.lastMessage.read} />
      </View>
    </TouchableOpacity>
  );
};
