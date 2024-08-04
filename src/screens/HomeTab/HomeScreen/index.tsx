import React, {useState, useLayoutEffect} from 'react';
import {View} from 'react-native';
import {PaperProvider, Text, TextInput} from 'react-native-paper';
import {HomeScreenProps} from './types';
import NBButton from '../../../components/nb-button/NBButton';
import {IMAGE_DEFAULT} from '../../../contants';
import {MOCK_LIST_USERS_RESENT} from '../../../mocks/list-user-resent.mock';
import {NbCardPost} from '../../../components/nb-card-post';

export const HomeScreen = (props: HomeScreenProps): JSX.Element => {
  const [searchModeEnabled, setSearchModeEnabled] = useState(false);

  const toggleAdditionalComponent = () => {
    setSearchModeEnabled(prevState => !prevState);
  };

  useLayoutEffect(() => {
    props.navigation.setOptions({
      onSearchPress: toggleAdditionalComponent,
    });
  }, [props.navigation, searchModeEnabled]);

  const navigateToCatalogComponentes = () => {
    props.navigation.navigate('GenetalComponentes');
  };
  return (
    <PaperProvider>
      <View style={{padding: 8, gap: 8}}>
        {searchModeEnabled && <TextInput placeholder="Buscar" />}
        <NbCardPost
          user={{
            imgUser: IMAGE_DEFAULT,
            name: 'Odon',
            lastName: 'Lozada',
          }}
          usersInteraction={{
            listUser: MOCK_LIST_USERS_RESENT,
            size: 32,
          }}
          liked={true}
          countLike={2}
          commented={true}
          countComment={12}
          shared={true}
          countShare={4}>
          <Text>
            Fui a tomar unas fotos al #CerroDelBorrego y conocí a las personas
            de lo más cool. Gracias #NitBit
          </Text>
        </NbCardPost>
        <NbCardPost
          user={{
            imgUser: IMAGE_DEFAULT,
            name: 'Jesús',
            lastName: 'Córdova',
          }}
          usersInteraction={{
            listUser: MOCK_LIST_USERS_RESENT,
            size: 32,
          }}
          liked={true}
          countLike={4}
          commented={true}
          countComment={8}
          shared={true}
          countShare={1}>
          <Text>
            Acabo de encontrar mi nueva cafetería favorita. Quién para platicar
            con un expresso?
          </Text>
        </NbCardPost>
      </View>
    </PaperProvider>
  );
};
