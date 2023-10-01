import {NativeStackScreenProps} from '@react-navigation/native-stack';
import * as React from 'react';
import {View} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import {HomeRootStackParamList} from '../../../navigation/navigators/HomeTabNavigator/HomeRootStackParamList';
import {NbCardNotification} from '../../../components/nb-card-notification';
import {IMAGE_DEFAULT} from '../../../contants';

export const NotificationsScreen = (
  props: NativeStackScreenProps<HomeRootStackParamList, 'NotificationsScreen'>,
): JSX.Element => {
  const goToConnectionRequestsScreen = () => {
    props.navigation.navigate('ConnectionRequestsScreen');
  };

  const goToPostDetail = (postId: string) => {
    props.navigation.navigate('PostDetailScreen', {postId});
  };

  return (
    <PaperProvider>
      <View style={{padding: 8}}>
        <NbCardNotification
          user={{
            imgUser: IMAGE_DEFAULT,
            name: 'odon',
            lastName: 'lozada',
          }}
          type="request"
          onPress={goToConnectionRequestsScreen}
          countConection={3}
        />
        <View style={{marginTop: 8, gap: 8}}>
          <NbCardNotification
            user={{
              imgUser: IMAGE_DEFAULT,
              name: 'odon',
              lastName: 'lozada',
            }}
            type="liked"
            onPress={() => goToPostDetail('01')}
            timeAction="3 min"
          />
          <NbCardNotification
            user={{
              imgUser: IMAGE_DEFAULT,
              name: 'odon',
              lastName: 'lozada',
            }}
            type="comment"
            onPress={() => goToPostDetail('02')}
            timeAction="45 min"
          />
        </View>
      </View>
    </PaperProvider>
  );
};
