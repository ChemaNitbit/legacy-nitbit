import React, {useCallback} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ChatItem} from './ChatItem';
import {MessagesRootStackParamList} from '../../../../navigation/navigators/MessagesTabNavigator/MessagesRootStackParamList';
import {Chat} from '../../../../shared/domain/chat';
import {timeAgo} from '../../../../shared/application/utils/timeAgo';

export interface ChatsListProps {
  virtualList?: boolean;
  chats?: Chat[];
}

type ChatListItem = Chat & {timeAgoLabel: string};

export const ChatsList = (
  props: NativeStackScreenProps<
    MessagesRootStackParamList,
    'ChatsScreen' | 'ConnectionsChatsScreen' | 'GeoFencesChatsScreen'
  > &
    ChatsListProps,
): JSX.Element => {
  const [listOfChats, setListOfChats] = React.useState<ChatListItem[]>([]);

  const loadChatsWithTimeAgo = useCallback(() => {
    const chatsWithTimeAgo = (props.chats || []).map(chat => ({
      ...chat,
      timeAgoLabel: timeAgo(chat.lastMessage.sentDate),
    }));
    setListOfChats(chatsWithTimeAgo);
  }, [props.chats]);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      loadChatsWithTimeAgo();
    }, 60000);
    return () => clearInterval(intervalId);
  }, [loadChatsWithTimeAgo]);

  React.useEffect(() => {
    loadChatsWithTimeAgo();
  }, [loadChatsWithTimeAgo, props.chats]);

  const goToChat = ({chatId}: {chatId: string}) => {
    props.navigation.navigate('ChatScreen', {chatId});
  };

  return (
    <>
      {(listOfChats || []).map(chat => (
        <ChatItem
          key={chat.id}
          chat={chat}
          onPress={goToChat}
          timeAgoLabel={chat.timeAgoLabel}
        />
      ))}
    </>
  );
};
