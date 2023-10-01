import React from 'react';
import {Alert, RefreshControl, ScrollView} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import {Layout} from '../../../components/layout';
import {NbSearchBar} from '../ChatsScreen/ConnectionsChatsScreen/SearchBar';

export const ChatSearcherScreen = (): JSX.Element => {
  const [searchText, setSearchText] = React.useState('');
  const [refreshing, setRefreshing] = React.useState(false);

  const onSearchChange = (text: string) => {
    setSearchText(text);
  };

  const sendInviteToConnect = () => {
    const simulateSendingInviteToConnect = () => {
      setRefreshing(true);
      return new Promise(resolve => {
        // simulate sending invite to connect
        setTimeout(() => {
          Alert.alert(
            'Invitación enviada',
            `Se ha enviado una invitación a ${searchText} para conectar.`,
          );
          setRefreshing(false);
          resolve(true);
        }, 1000);
      });
    };

    simulateSendingInviteToConnect();
  };

  return (
    <PaperProvider>
      <Layout.NbContainer>
        <ScrollView refreshControl={<RefreshControl refreshing={refreshing} />}>
          <NbSearchBar
            onSearchChange={onSearchChange}
            placeholder="¿Con quién quieres conectar?"
            extraAction={{
              icon: 'send',
              visible: true,
              onPress: sendInviteToConnect,
            }}
          />
        </ScrollView>
      </Layout.NbContainer>
    </PaperProvider>
  );
};
