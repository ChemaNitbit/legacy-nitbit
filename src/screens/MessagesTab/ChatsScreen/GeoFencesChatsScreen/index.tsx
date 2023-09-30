import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {MessagesRootStackParamList} from '../../../../navigation/navigators/MessagesTabNavigator/MessagesRootStackParamList';
import {ChatsList} from '../ChatList';
import {Animated, View, ScrollView, StyleSheet} from 'react-native';
import {Layout} from '../../../../components/layout';
import {useListHiddingHeader} from '../../../../hooks/animations/useListHiddingHeader';
import {ContactsShortcut} from '../ConnectionsChatsScreen/ContactsShortcut';
import {NbSearchBar} from '../ConnectionsChatsScreen/SearchBar';

export const GeoFencesChatsScreen = (
  props: NativeStackScreenProps<
    MessagesRootStackParamList,
    'GeoFencesChatsScreen'
  >,
): JSX.Element => {
  const {isHeaderHidden, translateYAnim, onScroll} = useListHiddingHeader({
    initialThreshold: 5,
    topTranslation: -80,
  });

  const fakeChats = (length: number) => {
    return Array.from({length}, () => ({
      id: Math.random().toString(),
      user: {
        id: Math.random().toString(),
        name: 'Marjoury',
      },
      lastMessage: {
        plainMessage: 'Hola! Cómo estás?',
        rawMessage: 'Hola! Cómo *estás*?',
        sentDate: new Date().toISOString(),
        // randomize if is th
        read: Math.random() > 0.5,
      },
    })).map((chat, index) => {
      return {
        ...chat,
        user: {
          ...chat.user,
          photoUrl: `https://randomuser.me/api/portraits/thumb/men/${
            index + 1
          }.jpg`,
        },
      };
    });
  };

  return (
    <Layout>
      {!isHeaderHidden && (
        <Animated.View
          style={[
            {},
            {
              transform: [{translateY: translateYAnim}],
            },
          ]}>
          <View style={styles.contactsShortcutContainer}>
            <ContactsShortcut
              contacts={fakeChats(10).map(mock => ({
                imgUser: mock.user.photoUrl,
                lastName: mock.user.name,
                name: mock.user.name,
                isOnline: Math.random() > 0.5,
              }))}
            />
          </View>
        </Animated.View>
      )}
      <Animated.View
        style={[
          {flex: 1},
          {
            transform: [{translateY: translateYAnim}],
          },
        ]}>
        <View style={styles.searchContainer}>
          <NbSearchBar />
        </View>
        <ScrollView
          style={styles.chatsContainer}
          onScroll={onScroll}
          scrollEventThrottle={16}>
          <ChatsList {...props} chats={fakeChats(80)} type="GEOFENCE" />
        </ScrollView>
      </Animated.View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contactsShortcutContainer: {
    padding: 16,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchContainer: {paddingLeft: 16, paddingRight: 16},
  chatsContainer: {
    marginTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
  },
});
