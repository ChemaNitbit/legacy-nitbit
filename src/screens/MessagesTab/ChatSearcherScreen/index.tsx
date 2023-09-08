import React from 'react';
import {View, Text} from 'react-native';
import {PaperProvider, TextInput} from 'react-native-paper';

export const ChatSearcherScreen = (): JSX.Element => {
  return (
    <PaperProvider>
      <View>
        <Text>Buscar chat o agregar conexión</Text>
        <TextInput placeholder="Buscar por teléfono" />
      </View>
    </PaperProvider>
  );
};
