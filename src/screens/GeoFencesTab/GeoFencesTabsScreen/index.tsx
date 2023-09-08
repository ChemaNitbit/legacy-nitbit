import * as React from 'react';
import {PaperProvider} from 'react-native-paper';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {GeoFencesScreen} from './GeoFencesScreen';
import {PlacesScreen} from './PlacesScreen';

export const GeoFencesTabsScreen = (): JSX.Element => {
  const TopTab = createMaterialTopTabNavigator();

  return (
    <PaperProvider>
      <TopTab.Navigator>
        <TopTab.Screen
          name="GeoFencesScreen"
          component={GeoFencesScreen}
          options={{title: 'Geocercas'}}
          initialParams={{type: 'direct'}}
        />
        <TopTab.Screen
          name="PlacesScreen"
          component={PlacesScreen}
          options={{title: 'Lugares'}}
          initialParams={{type: 'geofences'}}
        />
      </TopTab.Navigator>
    </PaperProvider>
  );
};
