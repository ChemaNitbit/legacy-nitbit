import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import 'firebase/auth';
import '../shared/infrastructure/firebase-config';

// screens
import LoginScreen from '../screens/Auth/login/LoginScreen';
import SignupScreen from '../screens/Auth/signup/SignupScreen';
import MainNavigation from './navigators/MainNavigation';
import WelcomeScreen from '../screens/welcome/WelcomeScreen';
import SplashScreen from '../screens/Splash/SplashScreen';
import NewPost from '../screen-modals/new-post-screen/new-post.screen';
import NbToolbarModal from '../components/nb-toolbar-modal/NbToolbarModal';
import ChatScreen from '../screen-modals/chat-screen/chat.screen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Group>
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SignUp"
            component={SignupScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{headerShown: false}}
          />
        </Stack.Group>
        <Stack.Group>
          <Stack.Screen
            name="MainNavigation"
            component={MainNavigation}
            options={{headerShown: false}}
          />
        </Stack.Group>
        <Stack.Group screenOptions={{presentation: 'modal'}}>
          <Stack.Screen
            name="NewPostModal"
            component={NewPost}
            options={{
              title: 'Nueva publicación',
              header: props => <NbToolbarModal {...props} />,
            }}
          />
          <Stack.Screen
            name="ChatModal"
            component={ChatScreen}
            options={{
              title: 'Nueva publicación',
              headerShown: false,
            }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
