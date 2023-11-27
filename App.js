import React, {useState} from 'react';
import { StyleSheet, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthStack from './stack/AuthStack.js';
import AppStack from './stack/AppStack.js';

import FlashMessage from "react-native-flash-message";

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <FlashMessage position="top" />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Auth" component={AuthStack} />
        <Stack.Screen name="App" component={AppStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
