import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Colors from './Colors';

export default function Button({butonName}) {
  return (
    <View style = {styles.button}>
      <TouchableOpacity>
        <Text style = {{  textAlign: 'center', fontWeight:'bold', paddingHorizontal: 10,
                          fontSize: 15, color: Colors.white}}>
          {butonName}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.text_color,
    padding: 10,
    borderRadius: 27,
    justifyContent: 'center',
    alignContent: 'center',
  },
});
