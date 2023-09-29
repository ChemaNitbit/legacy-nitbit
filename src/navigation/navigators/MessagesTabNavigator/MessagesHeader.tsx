import React from 'react';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import {Layout} from '../../../components/layout';
import NBButton from '../../../components/nb-button/NBButton';
import {Text} from 'react-native-paper';

export const MessagesHeader = (props: NativeStackHeaderProps): JSX.Element => {
  return (
    <Layout.NbHeader
      {...props}
      allowGoingBack={false}
      leftAction={<NBButton iconName="email-outline" />}
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
      ]}>
      <Text style={{fontSize: 16, fontWeight: '700', paddingLeft: 10}}>
        Mensajes
      </Text>
    </Layout.NbHeader>
  );
};
