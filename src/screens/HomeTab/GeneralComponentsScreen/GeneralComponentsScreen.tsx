import {Flex} from '@react-native-material/core';
import React from 'react';
import {Text} from 'react-native-paper';
import {
  NbActionsRequestConection,
  NbCardRequestConection,
  NbInteractionPost,
  NbUserBadge,
  NbUsersResent,
} from '../../../components';
import {IMAGE_DEFAULT} from '../../../contants';
import {MOCK_LIST_USERS_RESENT} from '../../../mocks/list-user-resent.mock';
import {NbIcon} from '../../../components/nb-icon';
import {NbCardPost} from '../../../components/nb-card-post/NbCardPost';
import {ScrollView} from 'react-native';
import {NbCardNotification} from '../../../components/nb-card-notification';

export const GeneralComponentsScreen = () => {
  return (
    <ScrollView>
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
        onLike={() => ({})}
        countComment={2}
        onComment={() => ({})}
        countShare={4}
        onShare={() => ({})}
      />

      <Text>
        {'\n'} card {'\n'}
      </Text>
      <NbCardPost>
        <Text>aaa</Text>
      </NbCardPost>

      <Text>
        {'\n'} Actions request conection {'\n'}
      </Text>
      <NbActionsRequestConection
        onAccept={() => ({})}
        onBlock={() => ({})}
        onCancel={() => ({})}
      />

      <Text>
        {'\n'} Card request conection {'\n'}
      </Text>
      <NbCardRequestConection
        url={IMAGE_DEFAULT}
        name="Jose Maria"
        description="descripcion corta de unas cuantas palabras"
        onAccept={() => ({})}
        onBlock={() => ({})}
        onCancel={() => ({})}
      />

      <Text>
        {'\n'} Card Notification Conections {'\n'}
      </Text>
      <NbCardNotification
        user={{
          imgUser: IMAGE_DEFAULT,
          name: 'odon',
          lastName: 'lozada',
        }}
        type="request"
        onPress={() => ({})}
        countConection={3}
      />

      <Text>
        {'\n'} Card Notification Liked {'\n'}
      </Text>
      <NbCardNotification
        user={{
          imgUser: IMAGE_DEFAULT,
          name: 'odon',
          lastName: 'lozada',
        }}
        type="liked"
        onPress={() => ({})}
        timeAction="3 min"
      />

      <Text>
        {'\n'} Card Notification Comment {'\n'}
      </Text>
      <NbCardNotification
        user={{
          imgUser: IMAGE_DEFAULT,
          name: 'odon',
          lastName: 'lozada',
        }}
        type="comment"
        onPress={() => ({})}
        timeAction="45 min"
      />
    </ScrollView>
  );
};
