/**
 * Add as many icons as you want here.
 * You can use any icon from react-native-vector-icons/MaterialCommunityIcons.
 * https://oblador.github.io/react-native-vector-icons/
 */
const IconsPerRouteName: {[key in string]: string} = {
  NotificationsScreen: 'bell-outline',
  ConnectionRequestsScreen: 'account-circle-outline',
  ChatsScreen: 'email-outline',
};

export const getIconNameByRouteName = (routeName: string): string => {
  return IconsPerRouteName[routeName] || 'menu';
};
