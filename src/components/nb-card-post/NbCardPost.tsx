import {Box} from '@react-native-material/core';
import React from 'react';
import {StyleSheet} from 'react-native';
import {NbCardPostProps} from '.';
import {NbIcon} from '../nb-icon';
import {NbInteractionPost} from '../nb-interaction-post';
import {NbUserBadge} from '../nb-user-badge';
import {NbUsersResent} from '../nb-users-resent';

export const NbCardPost = ({
  children,
  user,
  usersInteraction,
  liked,
  countLike,
  commented,
  countComment,
  shared,
  countShare,
}: NbCardPostProps) => {
  const {imgUser, name, lastName} = user;
  const {listUser, size} = usersInteraction;
  return (
    <Box style={styles.cardContent}>
      <Box style={styles.carHeader}>
        <NbUserBadge imgUser={imgUser} title={name} secondaryLabel={lastName} />
        <NbIcon name="dots-vertical" size="md" onPress={() => ({})} />
      </Box>
      <Box>{children}</Box>
      <Box style={styles.cardFooter}>
        <NbInteractionPost
          liked={liked}
          countLike={countLike}
          onLike={() => ({})}
          commented={commented}
          countComment={countComment}
          onComment={() => ({})}
          shared={shared}
          countShare={countShare}
          onShare={() => ({})}
        />
        <NbUsersResent listUser={listUser} size={size} />
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
