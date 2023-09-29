import React from 'react';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import {Layout} from '../../../components/layout';
import NBButton from '../../../components/nb-button/NBButton';
import {NbUserBadge} from '../../../components';

export const ChatHeader = (props: NativeStackHeaderProps): JSX.Element => {
  return (
    <Layout.NbHeader
      {...props}
      rightActions={[
        {
          key: 'MORE_OPTIONS',
          element: <NBButton iconName="dots-vertical" />,
        },
      ]}>
      <NbUserBadge
        imgUser="https://randomuser.me/api/portraits/thumb/men/1.jpg"
        title="Alfredo"
        secondaryLabel="López Hernández"
      />
    </Layout.NbHeader>
  );
};
