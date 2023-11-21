import React, {useState} from 'react';
import { StyleSheet, Text, View, ImageBackground, SafeAreaView, TextInput, TouchableOpacity, Pressable} from 'react-native';
import Colors from '../components/Colors';

export default function LoginScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.imgBackground} source={require('../assets/BG.png')} resizeMode='stretch'>

        <View style={styles.card}>

          <View style={styles.headerView}>
            <Text style={styles.headerText}>Hello!</Text>
            <Text>Sign in to your account.</Text>
          </View>

          <View style={styles.inputBox}>
            <TextInput placeholder='Email'/>
          </View>
          <View style={styles.inputBox}>
            <TextInput placeholder='Password' secureTextEntry={true}/>
          </View>

          <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('App')}>
            <Text style={{fontWeight: 'bold', color: 'white'}}>Login</Text>
          </TouchableOpacity>

        </View>

        <View style={{flexDirection: 'row', marginTop: 10}}>
          <Text>Need an account? </Text>
          <Pressable onPress={() => navigation.navigate('Register')}>
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
