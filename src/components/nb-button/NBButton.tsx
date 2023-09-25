import React from 'react';
import {Text, TouchableOpacity, ImageStyle, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './nb-button.styles';

export type NbButtonProps = {
  onPress?: () => void;
  title?: string;
  size?: number;
  type?: 'primary' | 'secondary' | 'danger' | 'default';
  iconName?: string;
  rounded?: boolean;
  iconColor?: string;
};

const NBButton = ({
  onPress,
  title,
  size = 100,
  iconName,
  rounded = false,
  iconColor,
}: NbButtonProps): JSX.Element => {
  if (iconName) {
    return (
      <TouchableOpacity
        style={rounded ? btnStyles.roundedButton : {}}
        onPress={onPress}>
        <MaterialCommunityIcons name={iconName} size={20} color={iconColor} />
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

const btnStyles = StyleSheet.create({
  roundedButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: '#8E54E9',
  },
});

export default NBButton;
