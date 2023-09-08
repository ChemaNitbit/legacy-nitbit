import * as React from 'react';
import {Appbar} from 'react-native-paper';
import {getHeaderTitle} from '@react-navigation/elements';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import {NbHeaderProps} from './NbHeader.types';
import {LeftActionElement} from './LeftActionElement';

export function NbHeader({
  allowGoingBack = true,
  leftAction,
  children,
  rightActions = [],
  ...props
}: NativeStackHeaderProps & NbHeaderProps) {
  const {navigation, route, options, back} = props;
  const routeTitle = getHeaderTitle(options, route.name);

  const showBackButton =
    back && allowGoingBack && props.options.headerBackVisible;

  return (
    <Appbar.Header>
      {showBackButton ? (
        <Appbar.BackAction onPress={navigation.goBack} />
      ) : (
        <LeftActionElement leftAction={leftAction} />
      )}
      <Appbar.Content title={children || routeTitle} />
      {rightActions.map(action =>
        React.cloneElement(action.element, {key: action.key}),
      )}
    </Appbar.Header>
  );
}
