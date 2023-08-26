import {useState, useEffect} from 'react';
import {MessageType} from '../@types/chat.type';
import chatMessageService from '../services/chat/chatMessageService';

export const useAllMessages = (chatId: string) => {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    try {
      const fetchChats = async () => {
        const response = await chatMessageService.listenMessagesByChatId(
          chatId,
        );

        // console.log("useAllMessages > response: ", response);

        setMessages(response);
      };

      fetchChats();

      return () => {
        chatMessageService.stopListeningChats();
      };
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {messages, isLoading};
};
