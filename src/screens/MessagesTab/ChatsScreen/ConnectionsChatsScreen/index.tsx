import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView, Animated} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NbSearchBar} from './SearchBar';
import {ChatsList} from '../ChatsList';
import {ConnectionUpdatesList} from './ConnectionUpdatesList';
import {useListHiddingHeader} from '../../../../hooks/animations/useListHiddingHeader';
import {MessagesRootStackParamList} from '../../../../navigation/navigators/MessagesTabNavigator/MessagesRootStackParamList';
import {Layout} from '../../../../components/layout';

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
        photoUrl: 'https://picsum.photos/200/300',
      },
      lastMessage: {
        plainMessage: 'Hola! Cómo estás?',
        rawMessage: 'Hola! Cómo *estás*?',
        sentDate: new Date().toISOString(),
        // randomize if is th
        read: Math.random() > 0.5,
      },
    }));
  };

  return (
    <Layout>
      <View style={{paddingTop: 16, paddingLeft: 16, paddingRight: 16}}>
        {!isHeaderHidden && (
          <Animated.View
            style={[
              styles.viewContainer,
              {
                transform: [{translateY: translateYAnim}],
              },
            ]}>
            <ConnectionUpdatesList />
          </Animated.View>
        )}
      </View>
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
    height: STORIES_CONTAINER_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  scrollView: {
    marginTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
  },
});
