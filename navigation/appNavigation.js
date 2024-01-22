import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import MovieScreen from '../screens/MovieScreen';
import PersonScreen from '../screens/PersonScreen';
import SearchScreen from '../screens/SearchScreen';
import SeatBookingScreen from '../screens/SeatBookingScreen';
import UserProfileScreen from '../screens/UserProfileScreen';
import SignUpScreen from '../screens/SignUpScreen';
import SignInScreen from '../screens/SignInScreen';
import AuthScreen from '../screens/AuthScreen'; 

const Stack = createNativeStackNavigator();


export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth">
        <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
        <Stack.Screen name="Movie" options={{headerShown: false}} component={MovieScreen} />
        <Stack.Screen name="Person" options={{headerShown: false}} component={PersonScreen} />
        <Stack.Screen name="Search" options={{headerShown: false}} component={SearchScreen} />
        <Stack.Screen name="SeatBooking" options={{headerShown: false}} component={SeatBookingScreen} />
        <Stack.Screen name="UserProfile" options={{headerShown: false}} component={UserProfileScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{ title: 'Sign Up' }} />
        <Stack.Screen name="SignIn" component={SignInScreen} options={{ title: 'Sign In' }} />
        <Stack.Screen
          name="Auth"
          component={AuthScreen}
          options={{
            title: 'Welcome to MovieTv',
            headerTitleAlign: 'center',
            headerStyle: {
              marginTop: 30,
              borderBottomWidth: 0,
              backgroundColor: 'pink',
            },
            headerTitleStyle: {
              color: '#ffffff',
              fontSize: 20,
              fontWeight: 'bold',
            },
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
  
}

