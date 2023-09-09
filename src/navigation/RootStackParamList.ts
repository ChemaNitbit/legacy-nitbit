import {HomeRootStackParamList} from './navigators/HomeTabNavigator/HomeRootStackParamList';
import {MessagesRootStackParamList} from './navigators/MessagesTabNavigator/MessagesRootStackParamList';

export type RootStackParamList = HomeRootStackParamList &
  MessagesRootStackParamList;
