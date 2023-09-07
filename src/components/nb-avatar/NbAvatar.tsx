import * as React from 'react';

import { Image, ImageStyle } from 'react-native';
import { IMAGE_DEFAULT } from '../../contants';

export interface AvatarProps {
  url: string | null;
  size: number;
}

const NbAvatar: React.FC<AvatarProps> = ({url = IMAGE_DEFAULT, size = 25}) => {
  // console.log("NbAvatar: ", url);

  const imageStyle: ImageStyle = {
    width: size,
    height: size,
    borderRadius: size / 2,
  };

  return <Image source={{uri: url as string}} style={imageStyle} />;
};

export default NbAvatar;
