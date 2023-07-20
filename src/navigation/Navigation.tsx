import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

// screens
import LoginScreen from '../screens/Auth/login/LoginScreen';
import SignupScreen from '../screens/Auth/signup/SignupScreen';
import HomeScreen from '../screens/home/HomeScreen';
import WelcomeScreen from '../screens/welcome/WelcomeScreen';
import SplashScreen from '../screens/Splash/SplashScreen';
import { User, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase-config';
import NewPost from '../screen-modals/new-post-screen/new-post.screen';
import NbToolbarModal from '../components/nb-toolbar-modal/NbToolbarModal';
import ChatScreen from '../screen-modals/chat-screen/chat.screen';

const Stack = createNativeStackNavigator();

const Navigation = () => {

    let initialNavigation: string = 'Welcome';

    useEffect(() => {
        onAuthStateChanged(auth, (user: User | null) => {
            if (user) {
                // console.log("existe sesión activa: ", user);
                initialNavigation = 'Home';
            } else {
                // console.log("no existe sesión activa: ");
            }
        })
    }, []);

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={initialNavigation}>
                <Stack.Group>
                    <Stack.Screen name='Welcome' component={WelcomeScreen}
                        options={{
                            headerShown: false
                        }}
                    ></Stack.Screen>
                    <Stack.Screen name='Login' component={LoginScreen}
                        options={{ headerShown: false }}
                    ></Stack.Screen>
                    <Stack.Screen name="SignUp" component={SignupScreen}
                        options={{ headerShown: false }}></Stack.Screen>
                    <Stack.Screen name="Splash" component={SplashScreen}
                        options={{ headerShown: false }}></Stack.Screen>
                    <Stack.Screen name="Home" component={HomeScreen}
                        options={{
                            title: '',
                            headerShown: false
                        }}
                    ></Stack.Screen>
                </Stack.Group>
                <Stack.Group screenOptions={{ presentation: 'modal' }}>
                    <Stack.Screen name="NewPostModal" component={NewPost} options={{
                        title: 'Nueva publicación',
                        header: (props) =>
                            <NbToolbarModal {...props}></NbToolbarModal>
                    }} />
                    <Stack.Screen name="ChatModal" component={ChatScreen} options={{
                        title: 'Nueva publicación',
                        headerShown: false
                    }} />
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;