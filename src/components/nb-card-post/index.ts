import {UserBadgeProps} from '../nb-user-badge';

export * from './NbCardPost';

export interface NbCardPostProps {
  user: UserBadgeProps;
  usersInteraction: usersResent;
  liked: boolean;
  countLike: number;
  commented: boolean;
  countComment: number;
  shared: boolean;
  countShare: number;
  children: any;
}

export interface usersResent {
  listUser: userResentItem[];
  size: number;
}

export interface userResentItem {
  id: number;
  profilePhoto: string;
}
