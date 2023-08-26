import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Image,
  Text,
  StyleSheet,
} from 'react-native';

// Custom Components
import NBButton from '../../components/nb-button/NBButton';

const WelcomeScreen = ({navigation}: any): JSX.Element => {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
        style={styles.scrollContainer}>
        <View style={styles.imageContainer}>
          <Image source={require('../../../assets/logo/neatbeat-logo.png')} />
        </View>

        <View style={[styles.card]}>
          <NBButton
            title={'Iniciar sesión'}
            onPress={() => navigation.navigate('Login')}
          />
          <NBButton
            title={'Crear cuenta'}
            onPress={() => navigation.navigate('SignUp')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  screenContainer: {
    height: '100%',
    display: 'flex',
    backgroundColor: 'white',
  },
  scrollContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  imageContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 80,
    paddingBottom: 150,
    paddingHorizontal: 50,
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    width: '87%',
    height: 'auto',
    backgroundColor: '#ffffff',
    gap: 25,
  },
});

export default WelcomeScreen;
