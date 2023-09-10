import React from 'react';
import {View} from 'react-native';
import {StyleSheet} from 'react-native';

export const NbContainer = ({children}: {children: any}): JSX.Element => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
