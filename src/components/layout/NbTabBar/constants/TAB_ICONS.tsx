import React, {ReactElement} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const TAB_ICONS: {[key in string]: ReactElement} = {
  OthersTab: (
    <MaterialCommunityIcons
      name="plus-circle-outline"
      size={25}
      color="black"
    />
  ),
  MessagesTab: (
    <MaterialCommunityIcons name="email-outline" size={25} color="black" />
  ),
  ProfileTab: (
    <MaterialCommunityIcons name="account-circle" size={25} color="black" />
  ),
  GeoFencesTab: <MaterialCommunityIcons name="web" size={25} color="black" />,
  HomeTab: (
    <MaterialCommunityIcons name="home-outline" size={25} color="black" />
  ),
};
