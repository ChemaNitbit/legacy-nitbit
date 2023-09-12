import {Box, Flex} from '@react-native-material/core';
import React from 'react';
import {Text} from 'react-native-paper';
import {
  NbInteractionPost,
  NbUserBadge,
  NbUsersResent,
} from '../../../components';
import {IMAGE_DEFAULT} from '../../../contants';
import {MOCK_LIST_USERS_RESENT} from '../../../mocks/list-user-resent.mock';
import {NbIcon} from '../../../components/nb-icon';
import {NbCardPost} from '../../../components/nb-card-post/NbCardPost';

export const GeneralComponentsScreen = () => {
  return (
    <Box>
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
      <NbUserBadge
        imgUser={IMAGE_DEFAULT}
        title="odon"
        secondaryLabel="lozada"
      />
      <Text>
        {'\n'} User Resent {'\n'}
      </Text>
      <NbUsersResent listUser={MOCK_LIST_USERS_RESENT} size={32} />

      <Text>
        {'\n'} Icon {'\n'}
      </Text>
      <Flex direction="row">
        <NbIcon name="magnify" size="sm" />
        <NbIcon name="magnify" size="md" />
        <NbIcon name="magnify" size="lg" />
      </Flex>

      <Text>
        {'\n'} interactions post {'\n'}
      </Text>
      <NbInteractionPost
        liked={true}
        countLike={2}
        onPressLike={() => ({})}
        countComment={2}
        onPressComment={() => ({})}
        countShare={4}
        onPressShare={() => ({})}
      />

      <Text>
        {'\n'} card {'\n'}
      </Text>
      <NbCardPost>
        <Text>aaa</Text>
      </NbCardPost>
    </Box>
  );
};
