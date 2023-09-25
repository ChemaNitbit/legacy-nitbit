import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ChatsScreen} from '../../../screens/MessagesTab/ChatsScreen';
import {Layout} from '../../../components/layout';
import {ChatScreen} from '../../../screens/MessagesTab/ChatScreen';
import {MessagesHeader} from './MessagesHeader';
import {ChatSearcherScreen} from '../../../screens/MessagesTab/ChatSearcherScreen';
import {ChatHeader} from './ChatHeader';

const MessagesTabStack = createNativeStackNavigator();

const MessagesTabNavigator = (): JSX.Element => {
  return (
    <MessagesTabStack.Navigator
      screenOptions={{presentation: 'modal', animation: 'flip'}}>
      <MessagesTabStack.Screen
        name="ChatsScreen"
        component={ChatsScreen}
        options={{
          header: MessagesHeader,
          title: 'Mensajes',
          headerBackVisible: false,
        }}
      />
      <MessagesTabStack.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{
          header: ChatHeader,
        }}
      />
      <MessagesTabStack.Screen
        name="ChatSearcherScreen"
        component={ChatSearcherScreen}
        options={{
          header: Layout.NbDefaultHeader,
          title: 'Buscar',
        }}
      />
    </MessagesTabStack.Navigator>
  );
};

export default MessagesTabNavigator;
