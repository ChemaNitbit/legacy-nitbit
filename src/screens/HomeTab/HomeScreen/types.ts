import {HomeRootStackParamList} from '../../../navigation/navigators/HomeTabNavigator/HomeRootStackParamList';
import {
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

export interface HomeScreenProps
  extends NativeStackScreenProps<HomeRootStackParamList, 'HomeScreen'> {
  navigation: NativeStackNavigationProp<
    HomeRootStackParamList,
    'HomeScreen'
  > & {
    setOptions: (
      options: NativeStackNavigationOptions & {onSearchPress: () => void},
    ) => void;
  };
}
