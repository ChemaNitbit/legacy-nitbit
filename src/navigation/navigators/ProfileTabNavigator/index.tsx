import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ProfileScreen} from '../../../screens/ProfileTab/ProfileScreen';

const ProfileTabStack = createNativeStackNavigator();

const ProfileTabNavigator = (): JSX.Element => {
  return (
    <ProfileTabStack.Navigator screenOptions={{presentation: 'modal'}}>
      <ProfileTabStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
    </ProfileTabStack.Navigator>
  );
};

export default ProfileTabNavigator;
