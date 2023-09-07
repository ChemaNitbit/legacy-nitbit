import * as React from 'react';
import {View} from 'react-native';
import {PaperProvider, Text} from 'react-native-paper';

export const NotificationsScreen = (): JSX.Element => {
  return (
    <PaperProvider>
      <View>
        <Text>NotificationsScreen</Text>
      </View>
    </PaperProvider>
  );
};
