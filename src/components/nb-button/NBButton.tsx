import React from 'react';
import { Text, TouchableOpacity, ImageStyle } from 'react-native';

// Styles
import { styles } from './nb-button.styles';

export type NbButtonTypeProps = {
    onPress: () => void;
    title: string;
    size: number;
}

const NBButton = ({ onPress, title, size = 100 }: any): JSX.Element => {

    const btnStyle: ImageStyle = {
        ...styles.button,
        width: `${size}%`
    }

    return (
        <TouchableOpacity onPress={onPress} style={btnStyle}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

export default NBButton;