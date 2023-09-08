import {NativeStackScreenProps} from '@react-navigation/native-stack';
import * as React from 'react';
import {View} from 'react-native';
import {Button, PaperProvider, Text} from 'react-native-paper';
import {HomeRootStackParamList} from '../../../navigation/navigators/HomeTabNavigator/HomeRootStackParamList';

export const NotificationsScreen = (
  props: NativeStackScreenProps<HomeRootStackParamList, 'NotificationsScreen'>,
): JSX.Element => {
  const goToConnectionRequestsScreen = () => {
    props.navigation.navigate('ConnectionRequestsScreen');
  };

  return (
    <PaperProvider>
      <View>
        <Text>NotificationsScreen</Text>
      </View>
      <View style={{padding: 8}}>
        <Button
          buttonColor="#098"
          textColor="#fff"
          onPress={goToConnectionRequestsScreen}>
          Aprueba o rechaza las solicitudes
        </Button>
        <View style={{marginTop: 8}}>
          <Button buttonColor="#999" textColor="#000">
            Notificación de un post
          </Button>
          <Button buttonColor="#999" textColor="#000">
            Notificación de un comentario
          </Button>
        </View>
      </View>
    </PaperProvider>
  );
};
