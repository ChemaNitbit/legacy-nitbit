import React from 'react';
import {View} from 'react-native';
import {Appbar} from 'react-native-paper';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import {Layout} from '..';
import NBButton from '../../nb-button/NBButton';
import {getIconNameByRouteName} from './getIconNameByRouteName';

interface NbDefaultHeaderProps extends NativeStackHeaderProps {
  title?: string;
  iconName?: string;
}

export const NbDefaultHeader = ({
  title,
  iconName,
  ...props
}: NbDefaultHeaderProps) => {
  const headerTitle = title || props.options.title;

  return (
    <Layout.NbHeader {...props}>
      {headerTitle ? (
        <View style={{display: 'flex', flexDirection: 'row', gap: 10}}>
          <NBButton
            iconName={iconName || getIconNameByRouteName(props.route.name)}
          />
          <Appbar.Content title={title || props.options.title} />
        </View>
      ) : (
        <View />
      )}
    </Layout.NbHeader>
  );
};
