import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {timeAgo} from '../../../shared/application/utils/timeAgo';
import {NbUserBadge} from '../../../components';

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
  chat: {
    id: string;
    user: {
      id: string;
      name: string;
      photoUrl: string;
    };
    lastMessage: {
      plainMessage: string;
      rawMessage: string;
      sentDate: string;
      read: boolean;
    };
  };
  onPress: ({chatId}: {chatId: string}) => void;
}

export const ChatItem = ({chat, onPress}: ChatItemProps) => {
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
        <Text style={{fontSize: 10, fontWeight: '600'}}>
          {timeAgo(chat.lastMessage.sentDate)}
        </Text>
        <NewMessageIndicator read={chat.lastMessage.read} />
      </View>
    </TouchableOpacity>
  );
};
