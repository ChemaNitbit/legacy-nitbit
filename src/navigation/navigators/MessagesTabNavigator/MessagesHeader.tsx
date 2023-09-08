import React from 'react';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import {Layout} from '../../../components/layout';
import NBButton from '../../../components/nb-button/NBButton';
import {Text} from 'react-native-paper';

export const MessagesHeader = (props: NativeStackHeaderProps): JSX.Element => {
  return (
    <Layout.NbHeader
      leftAction={<NBButton iconName="email-outline" />}
      allowGoingBack={false}
      rightActions={[
        {
          key: 'NEW_MESSAGE_BUTTON',
          element: (
            <NBButton
              onPress={() => props.navigation.navigate('ChatSearcherScreen')}
              iconName="comment-plus-outline"
            />
          ),
        },
      ]}
      {...props}>
      <Text>Mensajes</Text>
    </Layout.NbHeader>
  );
};
