import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const JobItem = ({props}) => {
  return (
    <View>
      <View>
        <Icon name="location-on"></Icon>
        <Text>Quezon City</Text>
      </View>
      <View>
        <Text>Helper</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

})

export default JobItem;