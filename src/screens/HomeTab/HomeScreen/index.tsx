import React, {useState, useLayoutEffect} from 'react';
import {View} from 'react-native';
import {PaperProvider, Text, TextInput} from 'react-native-paper';
import {HomeScreenProps} from './types';

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

  return (
    <PaperProvider>
      <View>
        {searchModeEnabled && <TextInput placeholder="Buscar" />}
        <Text>HomeScreen</Text>
      </View>
    </PaperProvider>
  );
};
