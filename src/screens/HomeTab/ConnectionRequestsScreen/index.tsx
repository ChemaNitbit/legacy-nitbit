import * as React from 'react';
import {PaperProvider} from 'react-native-paper';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {RequestsListScreen} from './RequestsListScreen';

export const ConnectionRequestsScreen = (): JSX.Element => {
  const TopTab = createMaterialTopTabNavigator();

  return (
    <PaperProvider>
      <TopTab.Navigator>
        <TopTab.Screen
          getId={() => 'DirectRequestsListScreen'}
          name="DirectRequestsListScreen"
          component={RequestsListScreen}
          options={{title: 'Directas'}}
          initialParams={{type: 'direct'}}
        />
        <TopTab.Screen
          getId={() => 'GeoFencesRequestsListScreen'}
          name="GeoFencesRequestsListScreen"
          component={RequestsListScreen}
          options={{title: 'Geocercas'}}
          initialParams={{type: 'geofences'}}
        />
      </TopTab.Navigator>
    </PaperProvider>
  );
};
