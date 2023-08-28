import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {styles} from './constants/styles';
import {TAB_ICONS} from './constants/TAB_ICONS';

const TabIcon = ({selected, tabName}: {selected: boolean; tabName: string}) => {
  return (
    <View style={[styles.tabIcon, selected && styles.selectedTab]}>
      {TAB_ICONS[tabName]}
    </View>
  );
};

export const NbTabBar = ({state, navigation}: BottomTabBarProps) => {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const tabName: string = route.name;
        const isFocused = state.index === index;

        return (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate(route.name)}
            style={styles.tabButton}>
            <TabIcon selected={isFocused} tabName={tabName} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
