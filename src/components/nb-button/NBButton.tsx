import React from 'react';
import { Text, TouchableOpacity, } from 'react-native';

// Styles
import { styles } from './nb-button.styles';


const NBButton = ({ onPress, title }: any): JSX.Element => {

    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

export default NBButton;