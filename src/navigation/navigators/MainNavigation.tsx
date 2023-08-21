import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeTab from '../../screens/home/tabs/HomeTab';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MessageTempTab from '../../screens/home/tabs/MessageTempTab';
import MessageFixedTab from '../../screens/home/tabs/MessageFixedTab';
import NbToolbar from '../../components/nb-toolbar/NbToolbar';
import {NbTabBar} from '../../components/layout/NbTabBar';

const Tab = createBottomTabNavigator();

const MainNavigation = (): JSX.Element => {
  return (
    // <AppProvider>
    <Tab.Navigator initialRouteName="HomeTab" tabBar={NbTabBar}>
      <Tab.Screen
        name="MessageTempTab"
        component={MessageTempTab}
        options={{
          title: 'Bit temporales',
          headerShown: false,
          tabBarIcon: props => (
            <MaterialCommunityIcons
              name="message-text-outline"
              color={'black'}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="HomeTab"
        component={HomeTab}
        options={{
          title: 'Home',
          tabBarIcon: props => (
            <MaterialCommunityIcons
              name="account-outline"
              color={'black'}
              size={30}
            />
          ),
          header: props => <NbToolbar {...props} back={false} />,
        }}
      />
      <Tab.Screen
        name="MessageFixedTab"
        component={MessageFixedTab}
        options={{
          title: 'Nit permanentes',
          headerShown: false,
          tabBarIcon: props => (
            <MaterialCommunityIcons
              name="message-text-outline"
              color={'black'}
              size={30}
            />
          ),
        }}
      />
    </Tab.Navigator>
    // </AppProvider>
  );
};

export default MainNavigation;
