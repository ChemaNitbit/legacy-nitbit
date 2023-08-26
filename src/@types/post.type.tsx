import {User} from './user.type';

export type Post = {
  id?: string | number;
  title: string;
  description: string;
  createAt?: Date;
  idUser: string | number;
  user?: User;
};
