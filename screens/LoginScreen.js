import React, {useState} from 'react';
import { StyleSheet, Text, View, ImageBackground, SafeAreaView, TextInput, TouchableOpacity, Pressable} from 'react-native';
import Colors from '../components/Colors';

import { showMessage, hideMessage } from "react-native-flash-message";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { db } from '../FirebaseConfig'; 
import { getDocs, query, collection, where } from 'firebase/firestore';


export default function LoginScreen({navigation}) {

  const [inputUsername, setInputUsername] = useState('')
  const [inputPassword, setInputPassword] = useState('')

  const handleChange = ({input,type}) => {
    if (type === 'username'){
      setInputUsername(input)
    } else if (type === 'password'){
      setInputPassword(input)
    } 
  }

  const handleLogin = async () => {
    try {
      const q = query(collection(db, 'users'), where('username', '==', inputUsername));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const userDoc = querySnapshot.docs[0];
        const userData = userDoc.data();

        if (userData.password === inputPassword) {
          
          await AsyncStorage.setItem('user-session', JSON.stringify({
              "id": userDoc.id,
              "username": userData.username,
              "password": userData.password,
              "name": userData.name,
              "age": userData.age,
              "contact": userData.contact,
              "email": userData.email,
              "address": userData.address
            })
          );
          
          navigation.replace('App');

        } else {

          showMessage({
            message: "Invalid Credentials: Please check your username and password.",
            type: "danger",
          });

        }
      } else {
        showMessage({
          message: "User Not Found: Please check your username and try again.",
          type: "danger",
        });
      }

      // Congrats! You've just stored your first value!
    } catch (error) {
      showMessage({
        message: error.message,
        type: "danger",
      });
    }
  };

  const handleRegister = () => {
    navigation.navigate('Register')
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.imgBackground} source={require('../assets/BG.png')} resizeMode='stretch'>

        <View style={styles.card}>

          <View style={styles.headerView}>
            <Text style={styles.headerText}>Hello!</Text>
            <Text>Sign in to your account.</Text>
          </View>

          <View style={styles.inputBox}>
            <TextInput placeholder='Username' onChangeText={(text)=> handleChange({input: text, type: 'username'})}/>
          </View>
          <View style={styles.inputBox}>
            <TextInput placeholder='Password' secureTextEntry={true} onChangeText={(text)=> handleChange({input: text, type: 'password'})}/>
          </View>

          <TouchableOpacity style={styles.btn} onPress={handleLogin}>
            <Text style={{fontWeight: 'bold', color: 'white'}}>Login</Text>
          </TouchableOpacity>

        </View>

        <View style={{flexDirection: 'row', marginTop: 10}}>
          <Text>Need an account? </Text>
          <Pressable onPress={handleRegister}>
            <Text style={{color: '#884AB2'}}>Signup here.</Text>
          </Pressable>
        </View>

      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imgBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputBox: {
    width: '90%',
    backgroundColor: 'rgba(255,255,255,1)',
    alignSelf: 'center',
    borderRadius: 18,
    padding: 8,
    marginBottom: 15,
    borderColor: Colors.card_header,
    borderWidth: 2,
    elevation: 2
  },
  headerText: {
    fontSize: 30,
    fontWeight: '100',
    paddingBottom: 0,
    alignSelf: 'stretch',
  },
  headerView: {
    alignSelf: 'center',
    width: '85%',
    marginVertical: 15,
  },
  card: {
    width: '85%',
    backgroundColor: 'rgba(255,255,255,0.78)',
    borderRadius: 20
  },
  btn: {
    //backgroundColor: 'tomato',
    width: '90%',
    backgroundColor: Colors.card_header,
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 18,
    marginBottom: 20,
    paddingVertical: 12,
    elevation: 2
  }
});
