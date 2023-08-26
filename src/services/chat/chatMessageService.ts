import {
  QuerySnapshot,
  Unsubscribe,
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  onSnapshot,
  query,
  where,
  Timestamp,
  orderBy,
} from 'firebase/firestore';
import {ChatType, MessageType} from '../../@types/chat.type';
import {auth, firestoreDB} from '../../shared/infrastructure/firebase-config';
import {UserType} from '../../@types/user.type';
import userService from '../users/userService';

class ChatMessagesService {
  private _unsubscribe: (() => void) | null = null;

  private _unsubscribeMessages: Unsubscribe | null = null;

  async listenAllChats(): Promise<ChatType[]> {
    try {
      const chatsList: ChatType[] = [];

      const q = query(
        collection(firestoreDB, 'chats'),
        where('senderId', '==', auth.currentUser?.uid),
        limit(2),
      );

      const responseSnapshot = await new Promise<QuerySnapshot>(
        (resolve, reject) => {
          this._unsubscribe = onSnapshot(q, resolve, reject);
        },
      );

      const iterate = async () => {
        for (const chat of responseSnapshot.docs) {
          const messages: MessageType[] = await this.getMessagesByChat(chat.id);

          if (messages.length) {
            const targetUserData: UserType = await userService.getUserById(
              chat.data().recipientId,
            );
            chatsList.push({
              id: chat.id,
              ...chat.data(),
              messages,
              targetUserData,
            } as ChatType);
          }
        }
      };

      await iterate();

      // console.log("listenAllChats > chatList: ", chatsList);

      return chatsList;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async getChatById(chatId: string): Promise<ChatType> {
    try {
      const docRef = doc(firestoreDB, 'chats', chatId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        return docSnap.data() as ChatType;
      } else {
        throw new Error('Chat not found.');
      }
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async getMessagesByChat(chatId: string): Promise<MessageType[]> {
    try {
      const messages: MessageType[] = [];

      const queryMessages = collection(firestoreDB, `chats/${chatId}/messages`);

      const querySnapshot = await getDocs(queryMessages);

      // console.log(">>> querySnapshot: ", querySnapshot, querySnapshot.size);

      if (querySnapshot.size) {
        querySnapshot.forEach(docMessage => {
          messages.push({
            id: docMessage.id,
            ...docMessage.data(),
          } as MessageType);
        });
      }

      // console.log("getMessagesByChat :: messages: ", messages);

      return messages;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async listenMessagesByChatId(chatId: string): Promise<MessageType[]> {
    try {
      const messages: MessageType[] = [];
      const q = query(
        collection(firestoreDB, `chats/${chatId}/messages`),
        orderBy('createdAt', 'asc'),
        limit(10),
      );

      const responseSnapshot = await new Promise<QuerySnapshot>(
        (resolve, reject) => {
          this._unsubscribeMessages = onSnapshot(q, resolve, reject);
        },
      );

      const iterate = async () => {
        for (const message of responseSnapshot.docs) {
          messages.push({id: message.id, ...message.data()} as MessageType);
        }
      };

      await iterate();

      // console.log("listenAllMessages > messages: ", messages);

      return messages;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async sendNewMessage(chatId: string, message: string): Promise<string> {
    try {
      const newMessage: MessageType = {
        createdAt: Timestamp.fromDate(new Date()),
        senderId: auth.currentUser?.uid as string,
        recipientId: 'u2',
        readStatus: false,
        message,
      };

      const messageRef = collection(firestoreDB, `chats/${chatId}/messages`);

      const response = await addDoc(messageRef, newMessage);

      return response.id;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  stopListeningChats(): void {
    if (this._unsubscribe) {
      this._unsubscribe();
      this._unsubscribe = null;
    }
  }

  stopListeningMessages(): void {
    if (this._unsubscribeMessages) {
      this._unsubscribeMessages();
      this._unsubscribeMessages = null;
    }
  }
}

export default new ChatMessagesService();
