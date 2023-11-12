import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { JobItem } from '../components/JobItem'

const HomeScreen = ({ navigation }) => {
  const handleLogout = async () => {
    console.log('Logging out...')
    await AsyncStorage.removeItem('isLoggedIn');
    navigation.replace('Login');
    console.log('Logged out succesfully!')
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.listings}>
  
        <View style={styles.job_listing}>
          <View style={styles.location}>
            <Icon name="location-on" color={'#FB6C00'} size={24}></Icon>
            <Text>Quezon City</Text>
          </View>
          <View>
            <Text style={styles.job_title}>Helper</Text>
            <Text style={styles.job_rate}>Rate: 10,000 - 20,000 PHP</Text>
          </View>
        </View>

        <View style={styles.job_listing}>
          <View style={styles.location}>
            <Icon name="location-on" color={'#FB6C00'} size={24}></Icon>
            <Text>Quezon City</Text>
          </View>
          <View>
            <Text style={styles.job_title}>Dish Washer</Text>
            <Text style={styles.job_rate}>Rate: 10,000 - 15,000 PHP</Text>
          </View>
        </View>

        <View style={styles.job_listing}>
          <View style={styles.location}>
            <Icon name="location-on" color={'#FB6C00'} size={24}></Icon>
            <Text>Quezon City</Text>
          </View>
          <View>
            <Text style={styles.job_title}>Rider</Text>
            <Text style={styles.job_rate}>Rate: 20,000 - 30,000 PHP</Text>
          </View>
        </View>

      </ScrollView>
      <Pressable onPress={handleLogout} style={styles.logout_button}>
        <Text style={styles.logout_button_label}>Logout</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFBB5C'
  },
  listings: {
    width: '80%',
  },
  job_listing: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    opacity: '60%',
    width: '100%',
    borderRadius: 12,
    padding: 10,
    marginBottom: 10,
  },
  job_title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FB6C00',
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  logout_button: {
    width: '100%'
  },
  logout_button_label: {
    fontWeight: 600,
    paddingVertical: 10, 
    borderRadius: 12,
    textAlign: 'center',
    backgroundColor: '#FB6C00',
    color: 'white'
  },
});

export default HomeScreen;