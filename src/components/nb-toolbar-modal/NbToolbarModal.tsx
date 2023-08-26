import * as React from 'react';

// Components Paper
import {Appbar, Button} from 'react-native-paper';

import {getHeaderTitle} from '@react-navigation/elements';

const NbToolbarModal = ({navigation: {goBack}, options, route}: any) => {
  const title = getHeaderTitle(options, route.name);

  return (
    <Appbar.Header>
      <Appbar.Action
        icon="close"
        onPress={() => {
          goBack();
        }}
      />
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
};

export default NbToolbarModal;
