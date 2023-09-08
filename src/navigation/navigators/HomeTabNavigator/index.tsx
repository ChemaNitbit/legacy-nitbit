import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../../../screens/HomeTab/HomeScreen';
import {HomeHeader} from './HomeHeader';
import {NotificationsScreen} from '../../../screens/HomeTab/NotificationsScreen';
import {Layout} from '../../../components/layout';
import {ConnectionRequestsScreen} from '../../../screens/HomeTab/ConnectionRequestsScreen';
import {ChatScreen} from '../../../screens/MessagesTab/ChatScreen';
import {StoriesScreen} from '../../../screens/HomeTab/StoriesScreen';
import {PostDetailScreen} from '../../../screens/HomeTab/PostDetailScreen';

const HomeTabStack = createNativeStackNavigator();

const HomeTabNavigator = (): JSX.Element => {
  return (
    <HomeTabStack.Navigator>
      <HomeTabStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          header: HomeHeader,
        }}
      />
      <HomeTabStack.Screen
        name="NotificationsScreen"
        component={NotificationsScreen}
        options={{
          title: 'Notificaciones',
          header: Layout.NbDefaultHeader,
        }}
      />
      <HomeTabStack.Screen
        name="ConnectionRequestsScreen"
        component={ConnectionRequestsScreen}
        options={{
          title: 'Solicitudes',
          header: Layout.NbDefaultHeader,
        }}
      />
      <HomeTabStack.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{
          header: Layout.NbDefaultHeader,
        }}
      />
      <HomeTabStack.Screen
        name="StoriesScreen"
        component={StoriesScreen}
        options={{
          header: Layout.NbDefaultHeader,
        }}
      />
      <HomeTabStack.Screen
        name="PostDetailScreen"
        component={PostDetailScreen}
        options={{
          header: Layout.NbDefaultHeader,
        }}
      />
    </HomeTabStack.Navigator>
  );
};

export default HomeTabNavigator;
