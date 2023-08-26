import {useState, useEffect} from 'react';
import {ChatType} from '../@types/chat.type';
import chatMessageService from '../services/chat/chatMessageService';

export const useAllChats = () => {
  const [chats, setChats] = useState<ChatType[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    try {
      const fetchChats = async () => {
        const response = await chatMessageService.listenAllChats();

        // console.log("useAllChats > response: ", response);

        setChats(response);
      };

      fetchChats();

      return () => {
        chatMessageService.stopListeningChats();
      };
    } catch (error) {
      // Dar tratamiento al error
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return {chats, isLoading};
};
