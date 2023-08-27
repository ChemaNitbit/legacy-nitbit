import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: '#eee',
  },
  scrollContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  scrollContainerContent: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  headerContainer: {
    width: '100%',
    height: 180,
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    width: '87%',
    height: 'auto',
    backgroundColor: '#ffffff',
    gap: 25,
  },
});
