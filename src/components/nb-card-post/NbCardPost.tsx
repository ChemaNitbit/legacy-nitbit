import {Box} from '@react-native-material/core';
import React from 'react';
import {NbUserBadge} from '../nb-user-badge';
import {NbIcon} from '../nb-icon';
import {NbInteractionPost} from '../nb-interaction-post';
import {NbUsersResent} from '../nb-users-resent';
import {IMAGE_DEFAULT} from '../../contants';
import {MOCK_LIST_USERS_RESENT} from '../../mocks/list-user-resent.mock';
import {StyleSheet} from 'react-native';

export const NbCardPost = ({children}: any) => {
  return (
    <Box style={styles.cardContent}>
      <Box style={styles.carHeader}>
        <NbUserBadge imgUser={IMAGE_DEFAULT} name="odon" lastName="lozada" />
        <NbIcon name="dots-vertical" size="md" />
      </Box>
      <Box>{children}</Box>
      <Box style={styles.cardFooter}>
        <NbInteractionPost
          liked={true}
          countLike={2}
          onPressLike={() => ({})}
          countComment={2}
          onPressComment={() => ({})}
          countShare={4}
          onPressShare={() => ({})}
        />
        <NbUsersResent listUser={MOCK_LIST_USERS_RESENT} size={32} />
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    padding: 8,
    backgroundColor: '#F0F0F0',
    borderRadius: 6,
    borderColor: '#000000',
    borderWidth: 1,
  },
  carHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardFooter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
