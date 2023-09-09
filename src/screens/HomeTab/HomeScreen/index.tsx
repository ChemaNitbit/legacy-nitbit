import React, {useState, useLayoutEffect} from 'react';
import {View} from 'react-native';
import {PaperProvider, Text, TextInput} from 'react-native-paper';
import {HomeScreenProps} from './types';
import NBButton from '../../../components/nb-button/NBButton';

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
      <View>
        {searchModeEnabled && <TextInput placeholder="Buscar" />}
        <Text>HomeScreen</Text>

        <NBButton
          onPress={() => navigateToCatalogComponentes()}
          title="aaaaaaaaa"
        />
      </View>
    </PaperProvider>
  );
};
