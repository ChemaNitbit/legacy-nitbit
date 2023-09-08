import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ChatsScreen} from '../../../screens/MessagesTab/ChatsScreen';
import {Layout} from '../../../components/layout';
import {ChatScreen} from '../../../screens/MessagesTab/ChatScreen';

const MessagesTabStack = createNativeStackNavigator();

const MessagesTabNavigator = (): JSX.Element => {
  return (
    <MessagesTabStack.Navigator
      screenOptions={{presentation: 'modal', animation: 'flip'}}>
      <MessagesTabStack.Screen
        name="ChatsScreen"
        component={ChatsScreen}
        options={{
          header: Layout.NbDefaultHeader,
          title: 'Mensajes',
          headerBackVisible: false,
        }}
      />
      <MessagesTabStack.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{
          header: Layout.NbDefaultHeader,
        }}
      />
    </MessagesTabStack.Navigator>
  );
};

export default MessagesTabNavigator;
