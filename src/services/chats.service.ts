import {
  query,
  collection,
  where,
  onSnapshot,
  QuerySnapshot,
  getDocs,
} from 'firebase/firestore';
import {auth, firestoreDB} from '../shared/infrastructure/firebase-config';
import {ChatType} from '../@types/chat.type';

export const fetchAllChatsByCurrentUserId = async (
  currentId: string,
): Promise<ChatType[]> => {
  const q = query(
    collection(firestoreDB, 'chats'),
    where('senderId', '==', auth.currentUser?.uid),
  );

  const querynapshot = await new Promise<QuerySnapshot>((resolve, reject) => {
    const unsubscribe = onSnapshot(q, resolve, reject);
  });

  // console.log('querysnapshot: ', querynapshot.docs);

  const chats: ChatType[] = querynapshot.docs.map(doc => {
    const getMessages = async () => {
      const messages = await getDocs(
        collection(firestoreDB, 'chats', doc.id, 'messages'),
      );

      // console.log(`${doc.id} messages: `, messages.docs);
    };

    getMessages();

    return {id: doc.id, ...doc.data()} as ChatType;
  });

  return chats;
};
