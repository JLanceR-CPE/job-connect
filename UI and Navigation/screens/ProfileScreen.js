import React, {useState} from 'react';
import {ScrollView, TouchableOpacity, StyleSheet, Text, View, ImageBackground, SafeAreaView, TextInput} from 'react-native';
import Colors from '../components/Colors';
import {FontAwesome5} from '@expo/vector-icons';


export default function ProfileScreen() {

  const [inputName, setInputName] = useState('Juan Dela Cruz');
  const [inputAge, setInputAge] = useState('25');
  const [inputEmail, setInputEmail] = useState('JuanDelaCruz@sample.com');
  const [inputContact, setInputContact] = useState('09123456789');
  const [inputAddress, setInputAddress] = useState('Caloocan City');

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

  const EnableEdit = () => {
    // Turn editable on for every text input
    // Hide Edit Profile and Logout buttons
    // and replace with Save or Cancel button
    console.log('EnableEdit pressed')
  }

  const Logout = () => {
    //Do logout here
    console.log('Logout pressed')
  }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.container} source={require('../assets/BG2.png')} resizeMode='stretch'>
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
              value = {inputName} editable = {false}
              onChangeText={(text)=>handleChange({input: text, type: 'name'})}
            />
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.textStyle}>Age</Text>
          </View>
          
          <View style={{...styles.inputContainer, flex: 1}}>
            <TextInput selectionColor={Colors.text_color} 
              multiline={false} style={styles.inputBox}
              value = {inputAge} editable = {false}
              onChangeText={(text)=>handleChange({input: text, type: 'age'})}/>
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.textStyle}>Contact No.</Text>
          </View>

          <View style={{...styles.inputContainer, flex: 1}}>
            <TextInput selectionColor={Colors.text_color} 
              multiline={false} style={styles.inputBox}
              value = {inputContact} editable = {false}
              onChangeText={(text)=>handleChange({input: text, type: 'contact'})}/>
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.textStyle}>Email Address</Text>
          </View>

          <View style={{...styles.inputContainer, flex: 1}}>
            <TextInput selectionColor={Colors.text_color} 
              multiline={false} style={styles.inputBox}
              value = {inputEmail} editable = {false}
              onChangeText={(text)=>handleChange({input: text, type: 'email'})}/>
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.textStyle}>Address</Text>
          </View>

          <View style={{...styles.inputContainer, flex: 1}}>
            <TextInput selectionColor={Colors.text_color} 
              multiline={false} style={styles.inputBox}
              value = {inputAddress} editable = {false}
              onChangeText={(text)=>handleChange({input: text, type: 'address'})}/>
          </View>

          <View style={{flexDirection: 'row', width: '90%', 
                        alignSelf: 'center', gap: 20, justifyContent: 'space-evenly'}}>
            <TouchableOpacity style={styles.btn}onPress={()=>{EnableEdit()}}>
              <Text style={styles.textStyle}>Edit Profile</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn} onPress={()=>{Logout()}}>
              <Text style={styles.textStyle}>Logout</Text>
            </TouchableOpacity>
          </View>
        
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