import {Box} from '@react-native-material/core';
import React from 'react';
import {Text} from 'react-native-paper';
import NbAvatar from '../nb-avatar/NbAvatar';
import {NbUserBadgeProps} from './NbUserBadge.types';

export const NbUserBadge = ({
  imgUser,
  title,
  secondaryLabel,
}: NbUserBadgeProps) => {
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
          {secondaryLabel}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
          }}>
          {title}
        </Text>
      </Box>
    </Box>
  );
};
