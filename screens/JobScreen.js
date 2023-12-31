import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, Text, View, ImageBackground, ScrollView, Image, Pressable} from 'react-native';
import Colors from '../components/Colors';

export default function JobScreen({route, navigation}) {

  const jobRequest = route.params.data


  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.imgBackground} source={require('../assets/BG2.png')} resizeMode='stretch'>
        <View style={styles.card}>
          <View style={{}}>
            <Pressable 
              style={{width: 30}}
              onPress={() => (
              navigation.navigate('Home')
              )}>
              <Image source={require('../assets/Left_Arrow.png')}
              style={{height: 30, width:30}}
              />
            </Pressable>
          </View>
          <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
              <Text style={{
                color: Colors.text_color, fontSize: 25, textAlign: 'center'
                }}>
                {jobRequest['job-request']}
              </Text>

              <View style={{
                backgroundColor:Colors.text_color, height: 2, marginVertical: 15
              }}></View>

              <Text style={styles.spacer}><Text style={{fontWeight: 'bold', fontSize: 17}}>Location: </Text>{jobRequest['job-location']}</Text>
              <Text style={styles.spacer}><Text style={{fontWeight: 'bold', fontSize: 17}}>Rate: </Text>{jobRequest['job-price-start']} - {jobRequest['job-price-end']}</Text>
              <Text style={styles.spacer}><Text style={{fontWeight: 'bold', fontSize: 17}}>Job Desription: </Text>{'\n'}{jobRequest['job-details']}</Text>
              <Text style={styles.spacer}><Text style={{fontWeight: 'bold', fontSize: 17}}>Job Requirements: </Text>{'\n'}{jobRequest['job-requirements']}</Text>

          </ScrollView>
        </View>
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
  },
  scroll: {
    backgroundColor: 'rgba(217,217,217,0.4)',
    borderRadius: 20,
    padding: 15,
    flex: 10
  },
  card: {
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderRadius: 20,
    padding: 15,
    margin: 15,
    marginTop: 40,
    flex: 10
  },
  spacer: {
    marginVertical: 5,
    color: Colors.text_color
  }
});
