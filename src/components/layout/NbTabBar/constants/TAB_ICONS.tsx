import React, {ReactElement} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ICON_SIZE, AVATAR_SIZE} from './styles';

export const TAB_ICONS: {[key in string]: ReactElement} = {
  NewContentTabNavigator: (
    <MaterialCommunityIcons
      name="plus-circle-outline"
      size={ICON_SIZE}
      color="black"
    />
  ),
  MessagesTab: (
    <MaterialCommunityIcons
      name="email-outline"
      size={ICON_SIZE}
      color="black"
    />
  ),
  ProfileTab: (
    <MaterialCommunityIcons
      name="account-circle"
      size={AVATAR_SIZE}
      color="black"
    />
  ),
  GeoFencesTab: (
    <MaterialCommunityIcons name="web" size={ICON_SIZE} color="black" />
  ),
  HomeTab: (
    <MaterialCommunityIcons
      name="home-outline"
      size={ICON_SIZE}
      color="black"
    />
  ),
};
