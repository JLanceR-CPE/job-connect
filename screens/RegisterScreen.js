import React, {useState} from 'react';
import { StyleSheet, Text, View, ImageBackground, SafeAreaView, TextInput, TouchableOpacity, Pressable, KeyboardAvoidingView, ScrollView} from 'react-native';
import Colors from '../components/Colors';

export default function Register({navigation}) {

  const [inputUsername, setInputUsername] = useState('')
  const [inputPassword, setInputPassword] = useState('')
  const [inputConfirmPassword, setInputConfirmPassword] = useState('')
  const [inputName, setInputName] = useState('');
  const [inputAge, setInputAge] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputContact, setInputContact] = useState('');
  const [inputAddress, setInputAddress] = useState('');

  const handleChange = ({input,type}) => {
    if (type === 'username'){
      setInputUsername(input)
    } else if (type === 'password'){
      setInputPassword(input)
    } else if (type === 'confirm-password'){
      setInputConfirmPassword(input)
    } else if (type === 'name'){
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

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.imgBackground} source={require('../assets/BG.png')} resizeMode='stretch'>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null} keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : null} style={{flex: 1, justifyContent: 'center'}}>
          <ScrollView style={{width: '100%'}}>
            <View style={styles.card}>

              <View style={styles.headerView}>
                <Text style={styles.headerText}>Welcome!</Text>
                <Text>Signup to create your account.</Text>
              </View>

              <View style={styles.inputBox}>
                <TextInput placeholder='Username' value = {inputUsername} onChangeText={(text)=>handleChange({input: text, type: 'username'})} />
              </View>
              <View style={styles.inputBox}>
                <TextInput placeholder='Password' value = {inputPassword} onChangeText={(text)=>handleChange({input: text, type: 'password'})} />
              </View>
              <View style={styles.inputBox}>
                <TextInput placeholder='Confirm Password' value = {inputConfirmPassword} onChangeText={(text)=>handleChange({input: text, type: 'confirm-password'})} />
              </View>
              <View style={styles.inputBox}>
                <TextInput placeholder='Name' value = {inputName} onChangeText={(text)=>handleChange({input: text, type: 'name'})} />
              </View>
              <View style={styles.inputBox}>
                <TextInput placeholder='Age' value = {inputAge} onChangeText={(text)=>handleChange({input: text, type: 'age'})} />
              </View>
              <View style={styles.inputBox}>
                <TextInput placeholder='Contact' value = {inputContact} onChangeText={(text)=>handleChange({input: text, type: 'contact'})} />
              </View>
              <View style={styles.inputBox}>
                <TextInput placeholder='Email' value = {inputEmail} onChangeText={(text)=>handleChange({input: text, type: 'email'})} />
              </View>
              <View style={styles.inputBox}>
                <TextInput placeholder='Address' value = {inputAddress} onChangeText={(text)=>handleChange({input: text, type: 'address'})} />
              </View>


              <TouchableOpacity style={styles.btn}>
                <Text style={{fontWeight: 'bold', color: 'white'}}>Signup</Text>
              </TouchableOpacity>

            </View>

            <View style={{flexDirection: 'row', marginTop: 10,}}>
              <Text>Already have an account? </Text>
              <Pressable onPress={() => navigation.navigate('Login')}>
                <Text style={{color: '#884AB2'}}>Login instead.</Text>
              </Pressable>
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
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.78)',
    borderRadius: 20,
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
