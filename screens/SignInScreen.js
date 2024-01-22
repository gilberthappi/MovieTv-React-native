// SignInScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    // Validation
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    // Make API request for sign-in
    try {
      const response = await fetch('https://movie-api-9ds8.onrender.com/api/v1/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      console.log('Server Response Status:', response.status);
      const data = await response.json();

      if (response.ok) {
        // Sign-in successful, save user token and navigate to the home screen
        if (data.access_token) {
          await AsyncStorage.setItem('userToken', data.access_token);
          navigation.replace('Home');
        } else {
          // Handle the case where the token is missing or undefined
          Alert.alert('Error', 'Invalid token received during sign-in.');
        }
      } else {
        // Handle sign-in error
        Alert.alert('Error', data.message);
      }
    } catch (error) {
      console.error('Error during sign-in:', error);
      Alert.alert('Error', 'An unexpected error occurred.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <Button title="Sign In" onPress={handleSignIn} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
    color: '#3498db', // Updated color for the title
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: '#BDBDBD',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: '#F5F5F5',
  },
});

export default SignInScreen;
