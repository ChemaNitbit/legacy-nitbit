import React from 'react';
import {PaperProvider, Text} from 'react-native-paper';

export const NewPostScreen = (): JSX.Element => {
  return (
    <PaperProvider>
      <Text>New Post</Text>
    </PaperProvider>
  );
};
