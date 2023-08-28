import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NbTabBar} from '../../components/layout/NbTabBar';
import NbToolbar from '../../components/nb-toolbar/NbToolbar';
import HomeTab from '../../screens/home/tabs/HomeTab';
import MessageTempTab from '../../screens/home/tabs/MessageTempTab';
import MessageFixedTab from '../../screens/home/tabs/MessageFixedTab';

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
      <Tab.Screen name="ProfileTab" component={HomeTab} />
      <Tab.Screen
        name="GeoFencesTab"
        component={MessageFixedTab}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="HomeTab"
        component={HomeTab}
        options={{
          header: props => <NbToolbar {...props} back={false} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigation;
