import React, {ReactElement} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const TAB_ICONS: {[key in string]: ReactElement} = {
  OthersTab: (
    <MaterialCommunityIcons
      name="message-text-outline"
      size={30}
      color="black"
    />
  ),
  MessagesTab: (
    <MaterialCommunityIcons
      name="message-text-outline"
      size={30}
      color="black"
    />
  ),
  ProfileTab: (
    <MaterialCommunityIcons
      name="message-text-outline"
      size={30}
      color="black"
    />
  ),
  GeoFencesTab: (
    <MaterialCommunityIcons
      name="message-text-outline"
      size={30}
      color="black"
    />
  ),
  HomeTab: (
    <MaterialCommunityIcons
      name="message-text-outline"
      size={30}
      color="black"
    />
  ),
};
