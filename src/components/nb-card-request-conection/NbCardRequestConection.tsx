import {Box} from '@react-native-material/core';
import React from 'react';
import {Text} from 'react-native-paper';
import NbAvatar from '../nb-avatar/NbAvatar';
import {NbActionsRequestConection} from '../ng-actions-request-conection';
import {StyleSheet} from 'react-native';
import {NbCardRequestConectionProps} from '.';

export const NbCardRequestConection = ({
  url,
  name,
  description,
  onCancel,
  onBlock,
  onAccept,
}: NbCardRequestConectionProps) => {
  return (
    <Box style={styles.contentCard}>
      <Box style={styles.contentCenter}>
        <Box w={200} style={styles.contentInfoUser}>
          <NbAvatar url={url} size={160} />
          <Text style={{fontSize: 24, textAlign: 'center'}}>{name}</Text>
          <Text style={{fontSize: 16, textAlign: 'center'}}>{description}</Text>
        </Box>
      </Box>
      <NbActionsRequestConection
        onAccept={onAccept}
        onBlock={onBlock}
        onCancel={onCancel}
      />
    </Box>
  );
};

const styles = StyleSheet.create({
  contentCenter: {
    display: 'flex',
    alignItems: 'center',
  },
  contentInfoUser: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
  },
  contentCard: {
    padding: 16,
    gap: 16,
    borderColor: '#000000',
    borderWidth: 1,
    backgroundColor: '#F0F0F0',
    borderRadius: 6,
  },
});
