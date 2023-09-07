import React from 'react';
import {Text, TouchableOpacity, ImageStyle} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './nb-button.styles';

export type NbButtonProps = {
  onPress?: () => void;
  title?: string;
  size?: number;
  type?: 'primary' | 'secondary' | 'danger' | 'default';
  iconName?: string;
};

const NBButton = ({
  onPress,
  title,
  size = 100,
  iconName,
}: NbButtonProps): JSX.Element => {
  if (iconName) {
    return (
      <TouchableOpacity onPress={onPress}>
        <MaterialCommunityIcons name={iconName} size={30} color="black" />
      </TouchableOpacity>
    );
  }

  const btnStyle: ImageStyle = {
    ...styles.button,
    width: `${size}%`,
  };

  return (
    <TouchableOpacity onPress={onPress} style={btnStyle}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default NBButton;
