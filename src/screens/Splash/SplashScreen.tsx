import {Box, Flex} from '@react-native-material/core';
import {getAuth} from 'firebase/auth';
import React from 'react';
import {Image} from 'react-native';
import {StyleSheet} from 'react-native';
import {View, Text} from 'react-native';

const SplashScreen = ({navigation}: any): JSX.Element => {
  const auth = getAuth();
  const user = auth.currentUser;

  setTimeout(() => {
    navigation.navigate('Home');
  }, 1600);

  return (
    <Flex fill justify="center" items="center" style={styles.bgSplash}>
      <Box
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <Image
          source={require('../../../assets/logo/neatbeat-logo.png')}
          style={{width: 77, height: 70}}
        />
      </Box>
      <Box style={{flex: 1}}>
        <Text style={styles.mainText}>
          Bienvenido! {`\n${user?.displayName}`}
        </Text>
      </Box>
    </Flex>
  );
};

const styles = StyleSheet.create({
  bgSplash: {
    backgroundColor: '#5AB0D6',
    gap: 30,
  },
  mainText: {
    color: '#fff',
    fontSize: 38,
    fontWeight: 'bold',
    fontStyle: 'italic',
    textAlign: 'center',
  },
});

export default SplashScreen;
