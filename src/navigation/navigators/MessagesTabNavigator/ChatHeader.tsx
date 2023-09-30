import React from 'react';
import {
  NativeStackHeaderProps,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import {Layout} from '../../../components/layout';
import NBButton from '../../../components/nb-button/NBButton';
import {NbUserBadge} from '../../../components';
import {Chat} from '../../../shared/domain/chat';
import {View} from 'react-native';
import {Menu} from 'react-native-paper';

export type ChatHeaderNavigationOptions = NativeStackNavigationOptions & {
  chat?: Chat;
  actions?: {
    allowBlock?: boolean;
    allowRemove?: boolean;
    allowMakePermanentConnection?: boolean;
  };
};
export interface ChatHeaderProps extends NativeStackHeaderProps {
  options: ChatHeaderNavigationOptions;
}

export const ChatHeader = (props: ChatHeaderProps): JSX.Element => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <Layout.NbHeader
      {...props}
      rightActions={[
        {
          key: 'MORE_OPTIONS',
          element: (
            <View
              style={{
                paddingTop: 8,
                flexDirection: 'row',
                justifyContent: 'flex-end',
              }}>
              <Menu
                visible={visible}
                onDismiss={closeMenu}
                anchor={
                  <NBButton iconName="dots-vertical" onPress={openMenu} />
                }>
                {props.options.actions?.allowMakePermanentConnection && (
                  <Menu.Item onPress={() => {}} title="Hacer permanente" />
                )}
                {props.options.actions?.allowBlock && (
                  <Menu.Item onPress={() => {}} title="Bloquear" />
                )}
                {props.options.actions?.allowRemove && (
                  <Menu.Item onPress={() => {}} title="Eliminar" />
                )}
              </Menu>
            </View>
          ),
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
