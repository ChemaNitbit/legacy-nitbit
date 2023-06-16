import React from 'react';
import { TextInput } from '@react-native-material/core';
import { Text, View, Image, SafeAreaView, ScrollView } from 'react-native';

// Styles
import { styles } from './login.styles';

// Custom Components
import NBButton from '../../../components/nb-button/NBButton';

const LoginScreen = () => {
    const [email, onChangeEmail] = React.useState('');
    const [password, onChangePassword] = React.useState('');

    return (
        <SafeAreaView style={styles.screenContainer}>
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }} style={styles.scrollContainer}>
                <View style={styles.imageContainer}>
                    <Image source={require('../../../../assets/logo/neatbeat-logo.png')} />
                </View>
                <View style={[styles.card]}>
                    <Text style={styles.title}>Inicio de sesión</Text>
                    <TextInput style={styles.formField} onChangeText={onChangeEmail} value={email} label="Correo" />
                    <TextInput style={styles.formField} onChangeText={onChangePassword} value={password} label="Contraseña" />
                    <NBButton title={'Iniciar sesión'}></NBButton>
                    <View style={styles.forgotPasswordContainer}>
                        <Image source={require('../../../../assets/icons/sad.png')}></Image>
                        <Text style={styles.forgotPasswordText}>Olvide mi contraseña</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

// const 

export default LoginScreen;