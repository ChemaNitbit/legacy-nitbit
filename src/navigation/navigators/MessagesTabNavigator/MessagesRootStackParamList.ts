import {ChatsListProps} from '../../../screens/MessagesTab/ChatsScreen/ChatList';

// Define other screens and their props here
export type MessagesRootStackParamList = {
  ChatScreen?: {
    chatId?: string;
  };
  ChatsScreen?: ChatsListProps;
  ConnectionsChatsScreen?: ChatsListProps;
  GeoFencesChatsScreen?: ChatsListProps;
  ChatSearcherScreen?: {};
};
