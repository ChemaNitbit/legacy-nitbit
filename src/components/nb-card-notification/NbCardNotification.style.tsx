import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  cardContentNotification: {
    padding: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 6,
  },
  contentConection: {
    display: 'flex',
    alignItems: 'flex-end',
    gap: 8,
  },
  contentElementAction: {
    display: 'flex',
    alignItems: 'flex-end',
    gap: 8,
  },
  actionAndTime: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});
