import {Box} from '@react-native-material/core';
import React from 'react';
import {Image} from 'react-native';

export const Logo = () => (
  <Box
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
    }}>
    <Image
      source={require('../../../../assets/logo/neatbeat-logo.png')}
      style={{width: 45, height: 45}}
    />
  </Box>
);
