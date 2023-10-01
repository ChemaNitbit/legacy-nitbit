import {UserBadgeProps} from '../nb-user-badge';

export * from './NbCardNotification';

export const VARIANT_NOTIFICATION = {
  request: 'request',
  comment: 'comment',
  liked: 'liked',
};

export interface NbCardNotificationProps {
  user: UserBadgeProps;
  type: 'request' | 'comment' | 'liked';
  onPress: () => void;
  countConection?: number;
  timeAction?: string;
}
