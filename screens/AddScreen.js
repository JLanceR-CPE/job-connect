import React, {useState} from 'react';
import {KeyboardAvoidingView, Image, Platform, TouchableOpacity, SafeAreaView, StyleSheet, Text, View, ImageBackground, TextInput, ScrollView } from 'react-native';
import Colors from '../components/Colors';

import { showMessage, hideMessage } from "react-native-flash-message";

import { db } from '../FirebaseConfig';
import { addDoc, collection, doc, setDoc, getFirestore } from 'firebase/firestore';

export default function AddScreen() {

  const [inputRequest, setInputRequest] = useState('')
  const [inputDetails, setInputDetails] = useState('')
  const [inputPriceStart, setInputPriceStart] = useState('')
  const [inputPriceEnd, setInputPriceEnd] = useState('')
  const [inputLocation, setInputLocation] = useState('')
  const [inputRequirements, setInputRequirements] = useState('')
  
  const clearAll = () => {
    setInputRequest('')
    setInputPriceStart('')
    setInputPriceEnd('')
    setInputLocation('')
    setInputDetails('')
    setInputRequirements('')
  }

  const handleChange = ({input,type}) => {
    if (type === 'request'){
      setInputRequest(input)
    } else if (type === 'price-start'){
      setInputPriceStart(input)
    } else if (type === 'price-end'){
      setInputPriceEnd(input)
    } else if (type === 'location'){
      setInputLocation(input)
    } else if (type === 'details'){
      setInputDetails(input)
    } else if (type === 'requirements'){
      setInputRequirements(input)
    }
  }
  
  const handleRequest = () => {
    try {
      if (inputRequest.trim() === '' || 
          inputPriceStart.trim() === '' ||
          inputPriceEnd.trim() === '' || 
          inputLocation.trim() === '' || 
          inputDetails.trim() === '' || 
          inputRequirements.trim() === '') 
          {

            showMessage({
              message: "Invalid Input: Please fill in all fields.",
              type: "danger",
            });
        return;
      }

      const requestRef = collection(db, 'job-requests');

      addDoc(requestRef, {
        "job-request": inputRequest,
        "job-price-start": inputPriceStart,
        "job-price-end": inputPriceEnd,
        "job-location": inputLocation,
        "job-details": inputDetails,
        "job-requirements": inputRequirements
      });
    

      showMessage({
        message: "Clicked",
        type: "success",
      });
      
      clearAll();

    } catch (error) {
      showMessage({
        message: error.message,
        type: "danger",
      });
    }

    
  }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.container} source={require('../assets/BG2.png')} resizeMode='stretch'>

      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null} keyboardVerticalOffset={Platform.OS === 'ios' ? 50 : null} style={styles.container}>

        <ScrollView style={{flex: 1, paddingTop: 50}} contentContainerStyle = {{flexGrow: 1}}>
          <View style={styles.textContainer}>
            <Text style={styles.textStyle}>Enter Your Job Request:</Text>
          </View>

          <View style={{...styles.inputContainer, flex: 1}}>
            <TextInput selectionColor={Colors.text_color} 
              multiline={true} style={styles.inputBox}
              value={inputRequest} placeholder='Ex. Software Engineer'
              placeholderTextColor={Colors.text_color}
              onChangeText={(text)=> handleChange({input: text, type: 'request'})}/>
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.textStyle}>Enter The Job Compensation Range (Start):</Text>
          </View>
          
          <View style={{...styles.inputContainer, flex: 1}}>
            <TextInput selectionColor={Colors.text_color} 
              multiline={true} style={styles.inputBox}
              value={inputPriceStart} placeholder='Ex. 10000'
              placeholderTextColor={Colors.text_color}
              onChangeText={(text)=> handleChange({input: text, type: 'price-start'})}/>
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.textStyle}>Enter The Job Compensation Range (End):</Text>
          </View>
          
          <View style={{...styles.inputContainer, flex: 1}}>
            <TextInput selectionColor={Colors.text_color} 
              multiline={true} style={styles.inputBox}
              value={inputPriceEnd} placeholder='Ex. To Develop Software'
              placeholderTextColor={Colors.text_color}
              onChangeText={(text)=> handleChange({input: text, type: 'price-end'})}/>
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.textStyle}>Enter The Job Location:</Text>
          </View>
          
          <View style={{...styles.inputContainer, flex: 1}}>
            <TextInput selectionColor={Colors.text_color} 
              multiline={true} style={styles.inputBox}
              value={inputLocation} placeholder='Ex. Quezon City'
              placeholderTextColor={Colors.text_color}
              onChangeText={(text)=> handleChange({input: text, type: 'location'})}/>
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.textStyle}>Enter The Job Details:</Text>
          </View>
          
          <View style={{...styles.inputContainer, flex: 3}}>
            <TextInput selectionColor={Colors.text_color} 
              multiline={true} style={styles.inputBox}
              value={inputDetails} placeholder='Ex. To Develop Software'
              placeholderTextColor={Colors.text_color}
              onChangeText={(text)=> handleChange({input: text, type: 'details'})}/>
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.textStyle}>Enter The Job Requirement/s:</Text>
          </View>

          <View style={{...styles.inputContainer, flex: 5}}>
            <TextInput selectionColor={Colors.text_color} 
              multiline={true} style={styles.inputBox}
              value={inputRequirements} placeholder='Ex. Bachelors Degree'
              placeholderTextColor={Colors.text_color}
              onChangeText={(text)=> handleChange({input: text, type: 'requirements'})}/>
          </View>

          <View style={{flexDirection: 'row', width: '90%', 
                        alignSelf: 'center', gap: 20, justifyContent: 'space-evenly'}}>
            <TouchableOpacity style={styles.btn}onPress={handleRequest}>
              <Text style={styles.textStyle}>Request</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn} onPress={
              () => clearAll()
            }>
              <Text style={styles.textStyle}>Clear</Text>
            </TouchableOpacity>
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
    paddingHorizontal: 20,
    paddingTop: 15,
  },
  inputBox: {
    width: '100%',
    height: '100%',
    minHeight: '8%',
    color: Colors.text_color,
  },
  btn:{
    backgroundColor: Colors.text_color,
    alignItems: 'center',
    padding: 15,
    borderRadius: 27,
    width: '45%',
    alignSelf: 'center',
    marginVertical: 20,
    elevation: 2,
  },
  textContainer: {
    width: '85%',
    alignSelf: 'center',
    paddingVertical: 3
  },
  textStyle:{
    color: Colors.white
  }
});
