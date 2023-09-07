import { Box } from '@react-native-material/core';
import React from 'react';
import {
    IUserResentItem,
    IUsersResent,
} from '../../models/nb-users-resent.model';
import NbAvatar from '../nb-avatar/NbAvatar';

export const NbUsersResent = ({listUser, size = 32}: IUsersResent) => {
  return (
    <Box
      style={{
        display: 'flex',
        flexDirection: 'row',
        paddingLeft: 8,
      }}>
      {listUser.map((user: IUserResentItem) => {
        return (
          <Box
            key={user.id}
            style={{
              marginLeft: -8,
            }}>
            <NbAvatar url={user?.profilePhoto as string} size={size} />
          </Box>
        );
      })}
    </Box>
  );
};
