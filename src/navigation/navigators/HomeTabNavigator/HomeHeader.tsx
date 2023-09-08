import React from 'react';
import {
  NativeStackHeaderProps,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import {Layout} from '../../../components/layout';
import NBButton from '../../../components/nb-button/NBButton';
import {Button} from 'react-native-paper';

interface HomeHeaderProps extends NativeStackHeaderProps {
  options: NativeStackNavigationOptions & {
    onSearchPress?: () => void;
  };
}

export const HomeHeader = (props: HomeHeaderProps): JSX.Element => {
  const goToStories = () => {
    props.navigation.navigate('StoriesScreen');
  };

  return (
    <Layout.NbHeader
      leftAction="logo"
      allowGoingBack={false}
      rightActions={[
        {
          key: 'SEARCH_BUTTON',
          element: (
            <NBButton
              onPress={
                props.options.onSearchPress && props.options.onSearchPress
              }
              iconName="magnify"
            />
          ),
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
      <Button onPress={goToStories}>Friends' Stories</Button>
    </Layout.NbHeader>
  );
};
