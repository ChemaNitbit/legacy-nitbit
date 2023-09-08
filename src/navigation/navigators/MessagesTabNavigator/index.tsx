import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ChatsScreen} from '../../../screens/MessagesTab/ChatsScreen';
import {Layout} from '../../../components/layout';

const MessagesTabStack = createNativeStackNavigator();

const MessagesTabNavigator = (): JSX.Element => {
  return (
    <MessagesTabStack.Navigator>
      <MessagesTabStack.Screen
        name="ChatsScreen"
        component={ChatsScreen}
        options={{
          header: Layout.NbDefaultHeader,
          title: 'Mensajes',
          headerBackVisible: false,
        }}
      />
    </MessagesTabStack.Navigator>
  );
};

export default MessagesTabNavigator;
