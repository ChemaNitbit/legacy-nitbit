import React from 'react';
import {PaperProvider, Text} from 'react-native-paper';
import {NbSearchBar} from '../../MessagesTab/ChatsScreen/ConnectionsChatsScreen/SearchBar';
import {Layout} from '../../../components/layout';
import {PlacesList} from './PlacesList';
import {View} from 'react-native';

export const PlacesScreen = (): JSX.Element => {
  return (
    <PaperProvider>
      <Layout.NbContainer>
        <Text style={{textAlign: 'center', marginBottom: 16}}>
          ¿Qué quieres encontrar?
        </Text>
        <View style={{marginBottom: 16}}>
          <NbSearchBar placeholder="Ir de compras, a turistear, patinar, bailar..." />
        </View>
        <PlacesList />
      </Layout.NbContainer>
    </PaperProvider>
  );
};
