import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native'; 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';

const Stack = createStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    const value = await AsyncStorage.getItem('isLoggedIn');
    setIsLoggedIn(value === 'true');
  };

  if (isLoggedIn === null) {
    return null; // You can show a loading indicator here
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={ LoginScreen }
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Home" 
          component={ HomeScreen } 
          options={{ headerShown: false }}
          />
          
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
