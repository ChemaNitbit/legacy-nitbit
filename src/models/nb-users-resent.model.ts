export interface IUsersResent {
  listUser: IUserResentItem[];
  size: number;
}

export interface IUserResentItem {
  id: number;
  profilePhoto: string;
}
