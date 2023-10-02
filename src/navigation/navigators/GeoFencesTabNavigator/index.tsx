import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GeoFencesTabsScreen} from '../../../screens/GeoFencesTab/GeoFencesTabsScreen';
import {GeoFenceDetailScreen} from '../../../screens/GeoFencesTab/GeoFencesTabsScreen/GeoFenceDetailScreen';
import {Layout} from '../../../components/layout';

const GeoFencesTabStack = createNativeStackNavigator();

const GeoFencesTabNavigator = (): JSX.Element => {
  return (
    <GeoFencesTabStack.Navigator screenOptions={{presentation: 'modal'}}>
      <GeoFencesTabStack.Screen
        name="GeoFencesTabsScreen"
        component={GeoFencesTabsScreen}
        options={{
          headerShown: false,
        }}
      />
      <GeoFencesTabStack.Screen
        name="GeoFenceDetailScreen"
        component={GeoFenceDetailScreen}
        options={{
          title: 'Detalle de la geocerca',
          header: Layout.NbDefaultHeader,
        }}
      />
    </GeoFencesTabStack.Navigator>
  );
};

export default GeoFencesTabNavigator;
