import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GeoFencesTabsScreen} from '../../../screens/GeoFencesTab/GeoFencesTabsScreen';

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
    </GeoFencesTabStack.Navigator>
  );
};

export default GeoFencesTabNavigator;
