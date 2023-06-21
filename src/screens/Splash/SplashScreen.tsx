import { getAuth } from 'firebase/auth';
import React from 'react';
import { View, Text } from 'react-native';

const SplashScreen = ({ navigation }: any): JSX.Element => {


    const auth = getAuth();
    const user = auth.currentUser;

    setTimeout(() => {
        navigation.navigate('Home');
    }, 1600)

    return (
        <View>
            <Text>Bienvenido, {user?.displayName}</Text>
        </View>
    )
}

export default SplashScreen;