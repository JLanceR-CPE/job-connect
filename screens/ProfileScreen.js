import React, {useState, useCallback, useLayoutEffect} from 'react';
import {Platform ,KeyboardAvoidingView,ScrollView, TouchableOpacity, StyleSheet, Text, View, ImageBackground, SafeAreaView, TextInput} from 'react-native';
import Colors from '../components/Colors';
import {FontAwesome5} from '@expo/vector-icons';

import { useFocusEffect } from '@react-navigation/native';
import { showMessage, hideMessage } from "react-native-flash-message";

import AsyncStorage from '@react-native-async-storage/async-storage';

import { db } from '../FirebaseConfig'; 
import { setDoc, doc } from 'firebase/firestore';

export default function ProfileScreen({navigation}) {

  const [inputName, setInputName] = useState('');
  const [inputAge, setInputAge] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputContact, setInputContact] = useState('');
  const [inputAddress, setInputAddress] = useState('');

  const [isTextBoxEnabled, setIsTextBoxEnabled] = useState(false);

  const handleChange = ({input,type}) => {
    if (type === 'name'){
      setInputName(input)
    } else if (type === 'age'){
      setInputAge(input)
    } else if (type === 'contact'){
      setInputContact(input)
    } else if (type === 'email'){
      setInputEmail(input)
    } else if (type === 'address'){
      setInputAddress(input)
    }
  }
  
  useFocusEffect(
    React.useCallback(() => {
      const fetchData = async () => {
        try {
          // Your asynchronous code goes here
          const user = await AsyncStorage.getItem('user-session');
          const userData = JSON.parse(user);
          if (userData !== null){
            if ( inputName === '' || inputAge === '' || inputContact === '' || inputEmail === '' || inputAddress === '') {
              setInputName(userData.name)
              setInputAge(String(userData.age))
              setInputContact(userData.contact)
              setInputEmail(userData.email)
              setInputAddress(userData.address)
            }
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      fetchData();

    }, [])
  );

  const handleEdit = () => {
    if (!isTextBoxEnabled) {

      setIsTextBoxEnabled(true);

    } else {
      
      const setAccountInfo = async () => {
        try {
          // Your asynchronous code goes here
          const user = await AsyncStorage.getItem('user-session');
          const userData = JSON.parse(user);
          console.log(userData)
          if (userData !== null){
            await setDoc(doc(db, "users", userData.id), {
              "username": userData.username,
              "password": userData.password,
              "name": inputName,
              "age": Number(inputAge),
              "contact": inputContact,
              "email": inputEmail,
              "address": inputAddress
            });
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      setAccountInfo();

      setIsTextBoxEnabled(false);

    }
  }

  const handleLogout = async () => {
    
    try {
      await AsyncStorage.removeItem('user-session')
    } catch(error) {
      console.error('Error fetching data:', error);
    }
    
    navigation.navigate('Auth')
  }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.container} source={require('../assets/BG2.png')} resizeMode='stretch'>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null} keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : null} style={styles.container}>
        <ScrollView >
          <View style={{flex: 1, paddingTop: 50}}> 
        
          <View style={{alignSelf: 'center'}}>
            <FontAwesome5 name='user-circle' size = {120} color = {Colors.white}/>
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.textStyle}>Name</Text>
          </View>

          <View style={{...styles.inputContainer, flex: 1}}>
            <TextInput selectionColor={Colors.text_color} 
              multiline={false} style={styles.inputBox}
              value = {inputName} editable = {isTextBoxEnabled}
              onChangeText={(text)=>handleChange({input: text, type: 'name'})}
            />
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.textStyle}>Age</Text>
          </View>
          
          <View style={{...styles.inputContainer, flex: 1}}>
            <TextInput selectionColor={Colors.text_color} 
              multiline={false} style={styles.inputBox}
              value = {inputAge} editable = {isTextBoxEnabled}
              onChangeText={(text)=>handleChange({input: text, type: 'age'})}/>
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.textStyle}>Contact No.</Text>
          </View>

          <View style={{...styles.inputContainer, flex: 1}}>
            <TextInput selectionColor={Colors.text_color} 
              multiline={false} style={styles.inputBox}
              value = {inputContact} editable = {isTextBoxEnabled}
              onChangeText={(text)=>handleChange({input: text, type: 'contact'})}/>
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.textStyle}>Email Address</Text>
          </View>

          <View style={{...styles.inputContainer, flex: 1}}>
            <TextInput selectionColor={Colors.text_color} 
              multiline={false} style={styles.inputBox}
              value = {inputEmail} editable = {isTextBoxEnabled}
              onChangeText={(text)=>handleChange({input: text, type: 'email'})}/>
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.textStyle}>Address</Text>
          </View>

          <View style={{...styles.inputContainer, flex: 1}}>
            <TextInput selectionColor={Colors.text_color} 
              multiline={false} style={styles.inputBox}
              value = {inputAddress} editable = {isTextBoxEnabled}
              onChangeText={(text)=>handleChange({input: text, type: 'address'})}/>
          </View>

          <View style={{flexDirection: 'row', width: '90%', 
                        alignSelf: 'center', gap: 20, justifyContent: 'space-evenly'}}>
            <TouchableOpacity style={styles.btn} onPress={()=>{handleEdit()}}>
              <Text style={styles.textStyle}> {isTextBoxEnabled ? 'Save Changes' : 'Edit Profile' } </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn} onPress={()=>{handleLogout()}}>
              <Text style={styles.textStyle}>Logout</Text>
            </TouchableOpacity>
          </View>
        
        </View> 
        </ScrollView>
        
        </KeyboardAvoidingView>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  inputContainer: {
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 25,
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  inputBox: {
    width: '100%',
    height: '100%',
    minHeight: '13%',
    color: Colors.text_color,
    textAlign: 'center'
  },
  btn:{
    backgroundColor: Colors.text_color,
    alignItems: 'center',
    padding: 15,
    borderRadius: 27,
    alignSelf: 'center',
    marginVertical: 20,
    elevation: 2,
    width: '45%'
  },
  textContainer: {
    width: '87%',
    alignSelf: 'center',
    paddingVertical: 3
  },
  textStyle:{
    color: Colors.white,
    textAlign: 'center'
  }
});