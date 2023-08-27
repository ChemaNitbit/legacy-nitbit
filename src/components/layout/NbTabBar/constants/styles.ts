import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white', // Adjust as needed
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  tabIcon: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedTab: {
    backgroundColor: 'green', // Adjust as needed
    borderRadius: 20, // Half of the icon height
  },
  avatarContainer: {
    width: 28,
    height: 28,
    borderColor: 'green', // Adjust as needed
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
