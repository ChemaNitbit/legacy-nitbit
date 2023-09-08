import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NewPostScreen} from '../../../screens/NewContentTab/NewPostScreen';
import {NewContentHeader} from './NewContentHeader';

const NewContentTabStack = createNativeStackNavigator();

const NewContentTabNavigator = (): JSX.Element => {
  return (
    <NewContentTabStack.Navigator screenOptions={{presentation: 'modal'}}>
      <NewContentTabStack.Screen
        name="NewPostScreen"
        component={NewPostScreen}
        options={{
          header: NewContentHeader,
          headerBackVisible: false,
        }}
      />
    </NewContentTabStack.Navigator>
  );
};

export default NewContentTabNavigator;
