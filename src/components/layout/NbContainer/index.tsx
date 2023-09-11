import React from 'react';
import {View} from 'react-native';
import {StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';

export const NbContainer = ({children}: {children: any}): JSX.Element => {
  const theme = useTheme();

  return (
    <View
      style={{...styles.container, backgroundColor: theme.colors.background}}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
