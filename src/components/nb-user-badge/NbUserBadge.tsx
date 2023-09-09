import {Box} from '@react-native-material/core';
import React from 'react';
import {Text} from 'react-native-paper';
import {IUserBadge} from '../../models/nb-user-badge.model';
import NbAvatar from '../nb-avatar/NbAvatar';

export const NbUserBadge = ({imgUser, name, lastName}: IUserBadge) => {
  return (
    <Box
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: 8,
        width: 'auto',
      }}>
      <Box>
        <NbAvatar url={imgUser} size={40} />
      </Box>
      <Box>
        <Text
          style={{
            fontSize: 12,
          }}>
          {lastName}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
          }}>
          {name}
        </Text>
      </Box>
    </Box>
  );
};
