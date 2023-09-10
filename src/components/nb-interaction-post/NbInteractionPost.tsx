import {Box} from '@react-native-material/core';
import React from 'react';
import {NbIcon} from '../nb-icon';
import {Text} from 'react-native-paper';
import {NbInteractionPostProps} from '.';
import {StyleSheet} from 'react-native';

export const NbInteractionPost = ({
  onPressLike,
  liked,
  countLike,
  onPressComment,
  countComment,
  onPressShare,
  countShare,
}: NbInteractionPostProps) => {
  return (
    <Box style={styles.contentInteractionPost}>
      <Box style={styles.itemInteractionPost}>
        <NbIcon
          name={liked ? 'cards-heart' : 'cards-heart-outline'}
          size="sm"
          onPress={onPressLike}
        />
        <Text style={styles.textCount}>{countLike}</Text>
      </Box>
      <Box>
        <NbIcon name="comment-outline" size="sm" onPress={onPressComment} />
        <Text style={styles.textCount}>{countComment}</Text>
      </Box>
      <Box>
        <NbIcon name="share-outline" size="sm" onPress={onPressShare} />
        <Text style={styles.textCount}>{countShare}</Text>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  contentInteractionPost: {
    display: 'flex',
    flexDirection: 'row',
    gap: 16,
  },
  itemInteractionPost: {
    // textAlign: 'center',
  },
  textCount: {
    fontSize: 12,
    textAlign: 'center',
  },
});
