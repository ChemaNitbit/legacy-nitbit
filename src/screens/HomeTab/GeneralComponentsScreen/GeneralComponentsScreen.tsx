import {Flex} from '@react-native-material/core';
import React from 'react';
import {Text} from 'react-native-paper';
import {NbUserBadge, NbUsersResent} from '../../../components';
import {IMAGE_DEFAULT} from '../../../contants';
import {MOCK_LIST_USERS_RESENT} from '../../../mocks/list-user-resent.mock';
import {NbIcon} from '../../../components/nb-icon';

export const GeneralComponentsScreen = () => {
  return (
    <Flex items="center">
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 30,
        }}>
        Componentes Generales {'\n'}
      </Text>
      <Text>
        {'\n'} Badge: {'\n'}
      </Text>
      <NbUserBadge imgUser={IMAGE_DEFAULT} name="odon" lastName="lozada" />
      <Text>
        {'\n'} User Resent {'\n'}
      </Text>
      <NbUsersResent listUser={MOCK_LIST_USERS_RESENT} size={32} />

      <Text>
        {'\n'} Icon {'\n'}
      </Text>
      <NbIcon name="magnify" size="sm" />
    </Flex>
  );
};
