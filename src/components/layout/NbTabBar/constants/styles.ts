import {StyleSheet} from 'react-native';

export const ICON_CONTAINER_SIZE = 45;
export const AVATAR_SIZE = 40;
export const ICON_SIZE = 24;

export const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFFFFF', // Adjust as needed
    padding: 0,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 5,
  },
  tabIcon: {
    width: ICON_CONTAINER_SIZE,
    height: ICON_CONTAINER_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedTab: {
    backgroundColor: '#80e', // Adjust as needed
    borderRadius: ICON_CONTAINER_SIZE / 2, // Half of the icon height
  },
  avatarContainer: {
    width: 28,
    height: 28,
    borderColor: '#4776E6', // Adjust as needed
    borderWidth: 2,
    borderRadius: 14, // Half of the avatar size
    overflow: 'hidden',
  },
  avatarImage: {
    width: 24,
    height: 24,
    resizeMode: 'cover',
  },
});
