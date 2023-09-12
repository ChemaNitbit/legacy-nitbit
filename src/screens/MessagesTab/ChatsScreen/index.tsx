import * as React from 'react';
import {Text, useTheme} from 'react-native-paper';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ConnectionsChatsScreen} from './ConnectionsChatsScreen';
import {GeoFencesChatsScreen} from './GeoFencesChatsScreen';

const renderTabTitle =
  (title: string) =>
  ({focused}: {focused: boolean}) => {
    return (
      <Text
        style={{
          fontSize: 18,
          fontWeight: '600',
          color: focused ? '#8E54E9' : '#BBBBBB',
        }}>
        {title}
      </Text>
    );
  };

export const ChatsScreen = (): JSX.Element => {
  const TopTab = createMaterialTopTabNavigator();
  const theme = useTheme();

  const tabBarStyle = {
    tabBarIndicatorStyle: {backgroundColor: theme.colors.background},
    tabBarStyle: {elevation: 0},
  };

  return (
    <TopTab.Navigator style={{elevation: 0}}>
      <TopTab.Screen
        name="ConnectionsChatsScreen"
        component={ConnectionsChatsScreen}
        options={{
          tabBarLabel: renderTabTitle('Amigos'),
          ...tabBarStyle,
        }}
      />
      <TopTab.Screen
        name="GeoFencesChatsScreen"
        component={GeoFencesChatsScreen}
        options={{
          tabBarLabel: renderTabTitle('Geocercas'),
          ...tabBarStyle,
        }}
      />
    </TopTab.Navigator>
  );
};
