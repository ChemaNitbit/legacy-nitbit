import * as React from 'react';
import {View} from 'react-native';
import {PaperProvider, Text} from 'react-native-paper';

export const HomeScreen = (): JSX.Element => {
  return (
    <PaperProvider>
      <View>
        <Text>HomeScreen</Text>
      </View>
    </PaperProvider>
  );
};
