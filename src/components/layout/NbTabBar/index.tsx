import React from 'react';
import {View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const TabIcon = ({selected}: any) => {
  return (
    <View style={[styles.tabIcon, selected && styles.selectedTab]}>
      <MaterialCommunityIcons
        name="message-text-outline"
        color={'black'}
        size={30}
      />
    </View>
  );
};

export const NbTabBar = ({state, descriptors, navigation}) => {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const isFocused = state.index === index;

        let icon;

        if (index === 2) {
          // Special handling for the 3rd option (user avatar)
          icon = <View style={styles.avatarContainer} />;
        } else {
          // Other icons
          icon = (
            <MaterialCommunityIcons
              name="message-text-outline"
              color={'black'}
              size={30}
            />
          ); // Replace with your actual icon component
        }

        return (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate(route.name)}
            style={styles.tabButton}>
            <TabIcon icon={icon} selected={isFocused} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white', // Adjust as needed
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  tabIcon: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedTab: {
    backgroundColor: 'green', // Adjust as needed
    borderRadius: 20, // Half of the icon height
  },
  avatarContainer: {
    width: 28,
    height: 28,
    borderColor: 'green', // Adjust as needed
    borderWidth: 2,
    borderRadius: 14, // Half of the avatar size
    overflow: 'hidden',
  },
  avatarImage: {
    width: 24,
    height: 24,
    resizeMode: 'cover',
  },
});
