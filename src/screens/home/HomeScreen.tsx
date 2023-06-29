import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeTab from './tabs/HomeTab';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MessageTempTab from './tabs/MessageTempTab';
import MessageFixedTab from './tabs/MessageFixedTab';


const Tab = createBottomTabNavigator();

const HomeScreen = (): JSX.Element => {
    return (
        <Tab.Navigator initialRouteName='HomeTab'>
            <Tab.Screen name="MessageTempTab" component={MessageTempTab} options={{ title: 'Bit temporales', headerShown: false, tabBarIcon: (props) => <MaterialCommunityIcons name="message-text-clock-outline" color={'black'} size={30} /> }} />
            <Tab.Screen name="HomeTab" component={HomeTab} options={{ title: 'Home', headerShown: false, tabBarIcon: (props) => <MaterialCommunityIcons name="account-outline" color={'black'} size={30} /> }} />
            <Tab.Screen name="MessageFixedTab" component={MessageFixedTab} options={{ title: 'Nit permanentes', headerShown: false, tabBarIcon: (props) => <MaterialCommunityIcons name="message-text-outline" color={'black'} size={30} /> }} />
        </Tab.Navigator>
    )
}

export default HomeScreen;