import React from 'react';
import NbAvatar from '../../../../components/nb-avatar/NbAvatar';
import {StyleSheet, FlatList} from 'react-native';

export const ConnectionUpdatesList = (): JSX.Element => {
  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]}
      renderItem={({}) => <NbAvatar size={50} />}
      keyExtractor={(item, index) => index.toString()}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    gap: 15,
    padding: 0,
  },
});
