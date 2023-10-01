import React from 'react';
import {Alert, View} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import {Layout} from '../../../components/layout';
import {NbSearchBar} from '../ChatsScreen/ConnectionsChatsScreen/SearchBar';

export const ChatSearcherScreen = (): JSX.Element => {
  const [searchText, setSearchText] = React.useState('');

  const onSearchChange = (text: string) => {
    setSearchText(text);
  };

  const sendInviteToConnect = () => {
    const simulateSendingInviteToConnect = () => {
      return new Promise(resolve => {
        setTimeout(() => {
          Alert.alert(
            'Invitación enviada',
            `Se ha enviado una invitación a ${searchText} para conectar.`,
          );
          resolve(true);
        }, 1000);
      });
    };

    simulateSendingInviteToConnect();
  };

  return (
    <PaperProvider>
      <Layout.NbContainer>
        <View>
          <NbSearchBar
            onSearchChange={onSearchChange}
            placeholder="¿Con quién quieres conectar?"
            extraAction={{
              icon: 'send',
              onPress: sendInviteToConnect,
              visible: true,
            }}
          />
        </View>
      </Layout.NbContainer>
    </PaperProvider>
  );
};
