export * from './NbCardNotification';

export const VARIANT_NOTIFICATION = {
  request: 'request',
  comment: 'comment',
  liked: 'liked',
};

export interface NbCardNotificationProps {
  user: UserNotificationProps;
  type: 'request' | 'comment' | 'liked';
  onPress: () => void;
  countConection?: number;
  timeAction?: string;
}

export interface UserNotificationProps {
  imgUser: string;
  name: string;
  lastName: string;
}
