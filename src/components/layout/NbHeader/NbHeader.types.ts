import {ReactElement} from 'react';

type DefaultLeftAction = 'logo';

export interface NbHeaderProps {
  allowGoingBack?: boolean;
  children?: ReactElement | Array<ReactElement>;
  leftAction?: React.ReactElement | DefaultLeftAction;
  rightActions?: Array<{key: string; element: React.ReactElement}>;
}
