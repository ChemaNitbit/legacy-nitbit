import React from 'react';
import {TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {NbIconProps, SIZES_ICON} from '.';

export const NbIcon = ({name, size, onPress, color}: NbIconProps) => {
  const buildIcon = () => (
    <MaterialCommunityIcons name={name} size={SIZES_ICON[size]} color={color} />
  );
  if (onPress) {
    return <TouchableOpacity onPress={onPress}>{buildIcon()}</TouchableOpacity>;
  }
  return buildIcon();
};
