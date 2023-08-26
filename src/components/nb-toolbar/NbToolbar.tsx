import * as React from 'react';
import {useState} from 'react';

// Components Paper
import {Appbar, Menu} from 'react-native-paper';

// Route
import {getHeaderTitle} from '@react-navigation/elements';

import {signOutService} from '../../services/auth.service';

const NbToolbar = ({navigation, route, options, back}: any) => {
  const title = getHeaderTitle(options, route.name);

  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const handleSignOut = () => signOutService(navigation);

  return (
    <Appbar.Header>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={title} />
      {!back ? (
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Appbar.Action icon="dots-vertical" onPress={openMenu} />}>
          <Menu.Item onPress={handleSignOut} title="Cerrar sesión" />
        </Menu>
      ) : null}
    </Appbar.Header>
  );
};

export default NbToolbar;
