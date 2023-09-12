export * from './NbCardNotification';

export const VARIANT_NOTIFICATION = {
  request: 'request',
  comment: 'comment',
  liked: 'liked',
};

export interface NbCardNotificationProps {
  imgUser: string;
  name: string;
  lastName: string;
  type: 'request' | 'comment' | 'liked';
  onPress: () => void;
  countConection?: number;
  timeAction?: string;
}
