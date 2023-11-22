import React, {useState} from 'react';
import {KeyboardAvoidingView, Image, TouchableOpacity, SafeAreaView, StyleSheet, Text, View, ImageBackground, TextInput } from 'react-native';
import Colors from '../components/Colors';

export default function AddScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.container} source={require('../assets/BG2.png')} resizeMode='stretch'>

        <View style={{flex: 1, paddingTop: 50}}>
          <View style={styles.textContainer}>
            <Text style={styles.textStyle}>Enter Your Job Request:</Text>
          </View>

          <View style={{...styles.inputContainer, flex: 1}}>
            <TextInput selectionColor={Colors.text_color} multiline={true} style={styles.inputBox}/>
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.textStyle}>Enter The Job Details:</Text>
          </View>
          
          <View style={{...styles.inputContainer, flex: 2}}>
            <TextInput selectionColor={Colors.text_color} multiline={true} style={styles.inputBox}/>
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.textStyle}>Enter The Job Requirement/s:</Text>
          </View>

          <View style={{...styles.inputContainer, flex: 3}}>
            <TextInput selectionColor={Colors.text_color} multiline={true} style={styles.inputBox}/>
          </View>

          <TouchableOpacity style={styles.btn}>
            <Text style={styles.textStyle}>Request</Text>
          </TouchableOpacity>
        
        </View> 

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
    textAlignVertical: 'top',
  },
  btn:{
    backgroundColor: Colors.text_color,
    alignItems: 'center',
    padding: 15,
    borderRadius: 27,
    width: '50%',
    alignSelf: 'center',
    marginVertical: 20,
    elevation: 2,
  },
  textContainer: {
    width: '87%',
    alignSelf: 'center',
    paddingVertical: 3
  },
  textStyle:{
    color: Colors.white
  }
});
