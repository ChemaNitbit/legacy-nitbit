import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NbTabBar} from '../../components/layout/NbTabBar';
import HomeTabNavigator from './HomeTabNavigator';
import MessagesTabNavigator from './MessagesTabNavigator';
import NewContentTabNavigator from './NewContentTabNavigator';
import GeoFencesTabNavigator from './GeoFencesTabNavigator';

const Tab = createBottomTabNavigator();

const MainNavigation = (): JSX.Element => {
  return (
    <Tab.Navigator initialRouteName="HomeTab" tabBar={NbTabBar}>
      <Tab.Screen
        name="NewContentTabNavigator"
        component={NewContentTabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="MessagesTab"
        component={MessagesTabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen name="ProfileTab" component={HomeTabNavigator} />
      <Tab.Screen
        name="GeoFencesTab"
        component={GeoFencesTabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="HomeTab"
        component={HomeTabNavigator}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigation;
