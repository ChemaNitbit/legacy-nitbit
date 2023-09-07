import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ChatScreen} from '../../../screens/MessagesTab/ChatScreen';
import {Layout} from '../../../components/layout';

const MessagesTabStack = createNativeStackNavigator();

const MessagesTabNavigator = (): JSX.Element => {
  return (
    <MessagesTabStack.Navigator>
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
