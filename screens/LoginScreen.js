import React, { useState } from 'react';
import { View, TextInput, Pressable, StyleSheet, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { db } from '../FirebaseConfig'; 
import { getDoc, doc, getDocs, query, collection, where } from 'firebase/firestore';


const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      console.log('Logging in...')
      const q = query(collection(db, 'users'), where('username', '==', username));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const userDoc = querySnapshot.docs[0];
        const userData = userDoc.data();

        if (userData.password === password) {
          console.log('Successfully Logged In!')
          navigation.replace('Home');

        } else {
          console.log('Invalid Credentials: Please check your username and password.');

        }
      } else {
        console.log('User Not Found: Please check your username and try again.');

      }
    } catch (error) {
      console.error('Error during login:', error.message);
    }
  };

  const handleSignup = () => {
    navigation.replace('Signup');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        JOB Connect
      </Text>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
        <Pressable title="Login" onPress={handleLogin} style={styles.login_button}>
          <Text style={styles.login_button_label}>Login</Text>
        </Pressable>
        <Pressable title="Signup" onPress={handleSignup} style={styles.signup_button}>
          <Text style={styles.signup_button_label}>Signup</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#FFBB5C'
  },
  input: {
    height: 40,
    color: '#ED9857',
    backgroundColor: '#FFFFFF',
    marginBottom: 16,
    paddingLeft: 16,
    borderRadius: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    paddingBottom: 40,
    textAlign: 'center'
  },
  login_button: {
    marginBottom: 16,
  },
  login_button_label: {
    fontWeight: 600,
    paddingVertical: 10, 
    borderRadius: 12,
    textAlign: 'center',
    backgroundColor: '#FB6C00',
    color: 'white'
  },
  signup_button: {

  },
  signup_button_label: {
    fontWeight: 600,
    paddingVertical: 10, 
    borderRadius: 12,
    textAlign: 'center',
    borderColor: '#FB6C00',
    borderWidth: 2,
    color: '#FB6C00'
  }
});

export default LoginScreen;