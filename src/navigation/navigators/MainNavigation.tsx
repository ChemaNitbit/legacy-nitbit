import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NbTabBar} from '../../components/layout/NbTabBar';
import HomeTabNavigator from './HomeTabNavigator';
import MessageTempTab from '../../screens/HomeTab/tabs/MessageTempTab';
import MessageFixedTab from '../../screens/HomeTab/tabs/MessageFixedTab';

const Tab = createBottomTabNavigator();

const MainNavigation = (): JSX.Element => {
  return (
    <Tab.Navigator initialRouteName="HomeTab" tabBar={NbTabBar}>
      <Tab.Screen
        name="OthersTab"
        component={MessageTempTab}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="MessagesTab"
        component={MessageTempTab}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen name="ProfileTab" component={HomeTabNavigator} />
      <Tab.Screen
        name="GeoFencesTab"
        component={MessageFixedTab}
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
