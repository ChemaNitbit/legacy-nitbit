import {Box} from '@react-native-material/core';
import React from 'react';
import {NbUserBadge} from '../nb-user-badge';
import {NbCardNotificationProps, VARIANT_NOTIFICATION} from '.';
import {Text} from 'react-native-paper';
import {NbIcon} from '../nb-icon';
import {TouchableOpacity} from 'react-native';
import {styles} from './NbCardNotification.style';

export const NbCardNotification = ({
  user,
  type,
  onPress,
  countConection,
  timeAction,
}: NbCardNotificationProps) => {
  const {imgUser, name, lastName} = user;
  const buildVariant = () => {
    if (type === VARIANT_NOTIFICATION.liked) {
      return getElementAction('cards-heart-outline', timeAction!, 'Nuevo Like');
    }
    if (type === VARIANT_NOTIFICATION.comment) {
      return getElementAction(
        'comment-outline',
        timeAction!,
        'Nuevo Comentario',
      );
    }

    return getElementConection(
      'account-circle-outline',
      countConection!,
      'Conexiones pendientes',
    );
  };
  const getElementAction = (
    iconName: string,
    time: string,
    label: string,
    color?: string,
  ) => {
    return (
      <Box style={styles.contentElementAction}>
        <Text style={{fontSize: 12}}>{label}</Text>
        <Box style={styles.actionAndTime}>
          <NbIcon name={iconName} size="md" color={color} />
          <Text style={{fontSize: 12}}>{time}</Text>
        </Box>
      </Box>
    );
  };

  const getElementConection = (
    iconName: string,
    count: number,
    label: string,
    color?: string,
  ) => {
    return (
      <Box style={styles.contentConection}>
        <Text style={{fontSize: 12}}>
          {label}: {count}
        </Text>
        <Box>
          <NbIcon name={iconName} size="md" color={color} />
        </Box>
      </Box>
    );
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <Box style={styles.cardContentNotification}>
        <Box>
          <NbUserBadge imgUser={imgUser} name={name} lastName={lastName} />
        </Box>
        <Box>{buildVariant()}</Box>
      </Box>
    </TouchableOpacity>
  );
};
