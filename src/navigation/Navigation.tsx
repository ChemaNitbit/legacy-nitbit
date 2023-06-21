import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

// screens
import LoginScreen from '../screens/Auth/login/LoginScreen';
import SignupScreen from '../screens/Auth/signup/SignupScreen';
import HomeScreen from '../screens/home/HomeScreen';
import WelcomeScreen from '../screens/welcome/WelcomeScreen';
import SplashScreen from '../screens/Splash/SplashScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Welcome'>
                <Stack.Screen name='Welcome' component={WelcomeScreen} options={{ headerShown: false }}></Stack.Screen>
                <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }}></Stack.Screen>
                <Stack.Screen name="SignUp" component={SignupScreen} options={{ headerShown: false }}></Stack.Screen>
                <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }}></Stack.Screen>
                <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;