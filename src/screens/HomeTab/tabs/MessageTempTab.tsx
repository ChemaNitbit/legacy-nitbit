import * as React from 'react';

import {View, Text, KeyboardAvoidingView, FlatList} from 'react-native';
import {useCurrentUser} from '../../../hooks/useCurrentUser';
import NbAvatar from '../../../components/nb-avatar/NbAvatar';

import {Searchbar} from 'react-native-paper';
import NbChatItem from '../../../components/nb-chat-item/NbChatItem';
import {useAllChats} from '../../../hooks/useAllChats';
import {useAllUserFriends} from '../../../hooks/useAllUserFriends';
import {UserType} from '../../../@types/user.type';

const MessageTempTab = ({navigation}: any) => {
  const [searchQuery, setSearchQuery] = React.useState<string>('');

  const {currentUser} = useCurrentUser();

  const {chats, isLoading} = useAllChats();

  const {userFriends} = useAllUserFriends();

  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        paddingHorizontal: 15,
        backgroundColor: '#fff',
      }}
      behavior="height">
      <View
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          gap: 10,
          minHeight: 50,
        }}>
        <NbAvatar url={currentUser?.photoURL as string} size={30} />
        <Text>{currentUser?.displayName}</Text>
      </View>

      <View style={{width: '100%'}}>
        <Searchbar
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
      </View>

      <View
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          gap: 10,
          alignItems: 'center',
          height: 80,
        }}>
        {userFriends.map((friend: UserType) => {
          return (
            <NbAvatar
              key={friend.id}
              url={friend?.profilePhoto as string}
              size={60}
            />
          );
        })}
      </View>

      <View style={{flex: 10}}>
        {isLoading && <Text>Loading ...</Text>}

        {!chats.length && !isLoading && <Text>Sin mensajes</Text>}

        <FlatList
          data={chats}
          renderItem={({item}) => (
            <NbChatItem chat={item} navigation={navigation} />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default MessageTempTab;
