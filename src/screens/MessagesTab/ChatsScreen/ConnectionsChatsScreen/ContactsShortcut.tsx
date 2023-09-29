import React from 'react';
import NbAvatar from '../../../../components/nb-avatar/NbAvatar';
import {StyleSheet, FlatList, View} from 'react-native';
import {User} from '../../../../shared/domain/user';
import {Text} from 'react-native-paper';

type Contact = User & {isOnline?: boolean; hasNewUpdates?: boolean};

interface ContactsShortcutProps {
  contacts?: Contact[];
}

export const ContactsShortcut = ({
  contacts = [],
}: ContactsShortcutProps): JSX.Element => {
  if (!contacts.length) {
    return (
      <View style={styles.container}>
        <Text>Sin actividad reciente</Text>
      </View>
    );
  }

  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={contacts}
      renderItem={({item}) => <NbAvatar url={item.imgUser} size={50} />}
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
    minHeight: 50,
    alignItems: 'center',
  },
});
