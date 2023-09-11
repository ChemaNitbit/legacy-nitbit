import * as React from 'react';
import {PaperProvider} from 'react-native-paper';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ConnectionsChatsScreen} from './ConnectionsChatsScreen';
import {GeoFencesChatsScreen} from './GeoFencesChatsScreen';

export const ChatsScreen = (): JSX.Element => {
  const TopTab = createMaterialTopTabNavigator();

  return (
    <TopTab.Navigator>
      <TopTab.Screen
        name="ConnectionsChatsScreen"
        component={ConnectionsChatsScreen}
        options={{title: 'Conexiones'}}
      />
      <TopTab.Screen
        name="GeoFencesChatsScreen"
        component={GeoFencesChatsScreen}
        options={{title: 'Geocercas'}}
      />
    </TopTab.Navigator>
  );
};
