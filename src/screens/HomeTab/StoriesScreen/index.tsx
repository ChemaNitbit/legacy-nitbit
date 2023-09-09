import React from 'react';
import {PaperProvider, Text} from 'react-native-paper';

export const StoriesScreen = (): JSX.Element => {
  return (
    <PaperProvider>
      <Text>StoriesScreen</Text>
    </PaperProvider>
  );
};
