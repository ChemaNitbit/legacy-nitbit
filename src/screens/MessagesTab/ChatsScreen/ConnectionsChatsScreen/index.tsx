import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView, Animated} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ChatsList} from '../ChatList';
import {NbSearchBar} from './SearchBar';
import {Layout} from '../../../../components/layout';
import {ContactsShortcut} from './ContactsShortcut';
import {useListHiddingHeader} from '../../../../hooks/animations/useListHiddingHeader';
import {MessagesRootStackParamList} from '../../../../navigation/navigators/MessagesTabNavigator/MessagesRootStackParamList';

const STORIES_CONTAINER_HEIGHT = 80;

export const ConnectionsChatsScreen = (
  props: NativeStackScreenProps<
    MessagesRootStackParamList,
    'ConnectionsChatsScreen'
  >,
): JSX.Element => {
  const {isHeaderHidden, translateYAnim, onScroll} = useListHiddingHeader({
    initialThreshold: 200,
    topTranslation: -100,
    topSpaceAfterHeaderIsHidden: STORIES_CONTAINER_HEIGHT,
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
            styles.viewContainer,
            {
              transform: [{translateY: translateYAnim}],
            },
          ]}>
          <View
            style={{
              padding: 16,
              display: 'flex',
              flexDirection: 'row',
            }}>
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
        <View style={{paddingLeft: 16, paddingRight: 16}}>
          <NbSearchBar />
        </View>
        <ScrollView
          style={styles.scrollView}
          onScroll={onScroll}
          scrollEventThrottle={16}>
          <ChatsList {...props} chats={fakeChats(80)} />
        </ScrollView>
      </Animated.View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    marginTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
  },
});
