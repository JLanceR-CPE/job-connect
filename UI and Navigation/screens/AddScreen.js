import React, {useState} from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function AddScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.imgBackground} source={require('../assets/BG2.png')} resizeMode='stretch'>
        <Text>AddScreen</Text>
      </ImageBackground>
    </View>
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
});
