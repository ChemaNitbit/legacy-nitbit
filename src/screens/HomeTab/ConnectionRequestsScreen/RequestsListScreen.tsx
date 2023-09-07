import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text} from 'react-native';
import {HomeRootStackParamList} from '../../../navigation/navigators/HomeTabNavigator/HomeRootStackParamList';

export interface RequestsListScreenProps {
  type?: 'direct' | 'geofences';
}

export const RequestsListScreen = (
  props: NativeStackScreenProps<HomeRootStackParamList, 'RequestsListScreen'> &
    any, // this "any" allows the TopTab navigator to accept the same screen component for both tabs
): JSX.Element => {
  return (
    <View>
      <Text>RequestsListScreen: {props.route.params?.type}</Text>
    </View>
  );
};
