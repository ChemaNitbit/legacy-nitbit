import React from 'react';
import {View} from 'react-native';

export const NewMessageIndicator = ({read}: {read: boolean}) => {
  return (
    <View
      style={{
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: read ? 'transparent' : '#8E54E9',
      }}
    />
  );
};
