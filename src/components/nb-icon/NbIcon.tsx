import React from 'react';
import {TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ICON_SIZE, NbIconProps} from '.';

export const NbIcon = ({name, size, onPress, color}: NbIconProps) => {
  const buildIcon = () => (
    <MaterialCommunityIcons name={name} size={ICON_SIZE[size]} color={color} />
  );
  if (onPress) {
    return <TouchableOpacity onPress={onPress}>{buildIcon()}</TouchableOpacity>;
  }
  return buildIcon();
};
