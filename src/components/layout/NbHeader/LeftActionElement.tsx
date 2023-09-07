import React from 'react';
import {Logo} from './Logo';
import {NbHeaderProps} from './NbHeader.types';

export const LeftActionElement = (props: Pick<NbHeaderProps, 'leftAction'>) => {
  const {leftAction} = props;

  if (leftAction === 'logo') {
    return <Logo />;
  }

  return leftAction;
};
