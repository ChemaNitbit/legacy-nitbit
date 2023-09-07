import React from 'react';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import {Layout} from '../../../components/layout';
import NBButton from '../../../components/nb-button/NBButton';
import {Text} from 'react-native-paper';

/**
 * Customize header for HomeTabNavigator
 */
export const MessagesHeader = (props: NativeStackHeaderProps): JSX.Element => {
  return (
    <Layout.NbHeader
      leftAction="logo"
      allowGoingBack={false}
      rightActions={[
        {
          key: 'SEARCH_BUTTON',
          element: <NBButton onPress={() => null} iconName="magnify" />,
        },
        {
          key: 'NOTIFICATIONS_BUTTON',
          element: (
            <NBButton
              onPress={() => props.navigation.navigate('NotificationsScreen')}
              iconName="bell-outline"
            />
          ),
        },
      ]}
      {...props}>
      <Text>Friends' Stories</Text>
    </Layout.NbHeader>
  );
};
