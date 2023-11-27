import React, {useState} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Colors from './Colors';
import {Ionicons} from '@expo/vector-icons';

export default function JobListing(props) {
    const {location,job,rate} = props
  return (
    <View style={styles.card}>
        <View style={styles.header}></View> 
            <View style = {{flexDirection: 'row', paddingTop: 10, paddingStart: 9}}>
               <Image  source = {require('../assets/Location.png')}width={5} height={5}/>  
               <Text style = {styles.location}>{location}</Text>
            </View>  

            <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                    <Text style = {styles.job}>{job}</Text>
                    <Text style = {styles.rate}>Rate: {rate}</Text>
                </View>
                <View>
                    <Ionicons name='chevron-forward-circle-outline' size={40} color={'#F29D38'}/>
                </View>
            </View> 

    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    width: '100%',
    paddingBottom: 14,
    marginBottom: 10
  },
  header: {
    backgroundColor: Colors.card_header,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    height: 12
  },
  padding: {
    padding: 10,
    marginBottom: 0
  },
  location: {
    color: Colors.text_color,
    fontSize: 14, 
    opacity: 0.85,
  },
  job: {
    color: Colors.text_color, 
    fontSize: 20, 
    fontWeight: 'bold',
    paddingStart: 14,
    paddingBottom: 3
  },
  rate: {
    color: Colors.text_color, 
    fontSize: 12, 
    opacity: 0.5,
    paddingStart: 14,
    paddingStart: 14,
  },
});
