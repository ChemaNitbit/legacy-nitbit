import React from 'react';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import {Layout} from '../../../components/layout';
import NBButton from '../../../components/nb-button/NBButton';

const CloseButton = ({onPress}: {onPress: () => void}) => {
  return <NBButton onPress={onPress} iconName="close" />;
};

export const NewContentHeader = (
  props: NativeStackHeaderProps,
): JSX.Element => {
  const goToHome = () => {
    props.navigation.navigate('HomeScreen');
  };

  return (
    <Layout.NbHeader
      leftAction={<CloseButton onPress={goToHome} />}
      rightActions={[
        {
          key: 'POST_BUTTON',
          element: <NBButton onPress={goToHome} iconName="send" />,
        },
      ]}
      allowGoingBack={false}
      {...props}
    />
  );
};
