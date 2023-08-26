import {Timestamp} from 'firebase/firestore';
import {UserType} from './user.type';

export type ChatType = {
  id: string;
  senderId: string;
  recipientId: string;
  targetUserData?: UserType;
  messages: MessageType[];
};

export type MessageType = {
  id?: string;
  message: string;
  createdAt: Timestamp;
  senderId: string;
  recipientId: string;
  readStatus: boolean;
};
