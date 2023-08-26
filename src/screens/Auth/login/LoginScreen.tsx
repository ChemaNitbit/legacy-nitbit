import React from 'react';
import {TextInput} from '@react-native-material/core';
import {Text, View, Image, SafeAreaView, ScrollView} from 'react-native';

// Styles
import {styles} from './login.styles';

// Custom Components
import NBButton from '../../../components/nb-button/NBButton';
import {ICredentials} from '../../../interfaces/credentials.interface';
import {onLogin} from '../../../services/auth.service';

const LoginScreen = ({navigation}: any) => {
  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');

  const handleLogin = () => {
    const credentials: ICredentials = {
      email,
      password,
    };

    onLogin(credentials, navigation);
  };

  return (
    <SafeAreaView style={styles.screenContainer}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        style={styles.scrollContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../../../assets/logo/neatbeat-logo.png')}
          />
        </View>
        <View style={[styles.card]}>
          <Text style={styles.title}>Inicio de sesión</Text>
          <TextInput
            style={styles.formField}
            onChangeText={onChangeEmail}
            value={email}
            label="Correo"
          />
          <TextInput
            style={styles.formField}
            onChangeText={onChangePassword}
            value={password}
            label="Contraseña"
            secureTextEntry={true}
          />
          <NBButton onPress={handleLogin} title={'Iniciar sesión'} />
          <View style={styles.forgotPasswordContainer}>
            <Image source={require('../../../../assets/icons/sad.png')} />
            <Text style={styles.forgotPasswordText}>Olvide mi contraseña</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
