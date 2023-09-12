import {Box} from '@react-native-material/core';
import React from 'react';
import {NbIcon} from '../nb-icon';
import {StyleSheet} from 'react-native';
import {NbActionsRequestConectionPops} from '.';

export const NbActionsRequestConection = ({
  onCancel,
  onBlock,
  onAccept,
}: NbActionsRequestConectionPops) => {
  return (
    <Box style={styles.contentActionsRequestConection}>
      <NbIcon name="close-circle-outline" size="lg" onPress={onCancel} />
      <NbIcon name="cancel" size="lg" onPress={onBlock} />
      <NbIcon name="check-circle-outline" size="lg" onPress={onAccept} />
    </Box>
  );
};

const styles = StyleSheet.create({
  contentActionsRequestConection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
