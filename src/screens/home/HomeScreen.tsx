import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeTab from './tabs/HomeTab';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MessageTempTab from './tabs/MessageTempTab';
import MessageFixedTab from './tabs/MessageFixedTab';

import {AppProvider} from '../../context/AppContext';
import NbToolbar from '../../components/nb-toolbar/NbToolbar';

const Tab = createBottomTabNavigator();

const HomeScreen = (): JSX.Element => {
  return (
    // <AppProvider>
    <Tab.Navigator initialRouteName="HomeTab">
      <Tab.Screen
        name="MessageTempTab"
        component={MessageTempTab}
        options={{title: 'Bit temporales', headerShown: false}}
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

export default HomeScreen;
