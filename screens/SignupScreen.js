import React, { useState } from 'react';
import { View, TextInput, Pressable, StyleSheet, Text } from 'react-native';

import { db } from '../FirebaseConfig';
import { addDoc, collection, doc, setDoc, getFirestore } from 'firebase/firestore';

const SignUpScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Implement your signup logic here
    // This is just a basic example, you should add proper validation and use a secure authentication method

    try {
      if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
        console.log('Invalid Input: Please fill in all fields.');
        return;
      }

      const userRef = collection(db, 'users');

      // Set the user data in the document
      addDoc(userRef, {
        name: name,
        email: email,
        password: password,
      });

      console.log('Sign Up Successful: Welcome to the app!');
    } catch (error) {
      console.error('Error during signup:', error.message);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Sign up with us!
      </Text>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
          securedTextEntry={true}
        />
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
  signup_button: {
    marginBottom: 16,
  },
  signup_button_label: {
    fontWeight: 600,
    paddingVertical: 10, 
    borderRadius: 12,
    textAlign: 'center',
    backgroundColor: '#FB6C00',
    color: 'white'
  },
});

export default SignUpScreen;