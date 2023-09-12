export interface Chat {
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
}
