import React, {useState} from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, Pressable, View, ImageBackground, Image} from 'react-native';
import { Jobs } from '../assets/Jobs';
import Colors from '../components/Colors'

import { useFocusEffect } from '@react-navigation/native';

import { db } from '../FirebaseConfig'; 
import { getDocs, query, collection, where } from 'firebase/firestore';



export default function HomeScreen({navigation}) {

  const [jobRequests, setJobRequests] = useState({});

  useFocusEffect(
    React.useCallback(() => {
      const fetchData = async () => {
        try {
          // Your asynchronous code goes here
          const querySnapshot = await getDocs(collection(db, "job-requests"));
          
          const documents = querySnapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data(),
          }));

          setJobRequests(documents);

        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      fetchData();

    }, [])
  );

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.imgBackground} source={require('../assets/BG2.png')} resizeMode='stretch'>
        <FlatList 
          style={styles.scroll}
          showsVerticalScrollIndicator={false}
          data={jobRequests}
          renderItem={
            ({item}) => (
              <Pressable style={styles.rowLayout} onPress={()=>{
                navigation.navigate('Job', item)
              }}>
                <View style={styles.rowHeader}></View>
                <View style={styles.rowBody}>
                  <View style={{
                    flexDirection: 'row', 
                    paddingStart: 15, 
                    paddingTop: 7, 
                    gap: 2,
                    }}>

                    <Image 
                    source={require('../assets/Location.png')} 
                    resizeMode='contain' style={{
                      height: 23,
                      width: 23
                    }}
                    />

                    <Text numberOfLines={1} ellipsizeMode="tail" style={{
                      fontSize: 14, color: 'rgba(251,108,0,0.80)'
                    }}>
                      {item.data['job-location']}
                    </Text>

                  </View>
                  <View style={{
                    flexDirection: 'row', 
                    justifyContent: 'space-between',
                    paddingHorizontal: 20,
                    paddingBottom: 15
                    }}>
                    
                    <View>
                      <Text numberOfLines={1} ellipsizeMode="tail" style={{fontSize: 20, color: 'rgba(251,108,0,1)', paddingTop: 3}}>
                        {item.data['job-request']}
                      </Text>
                      <Text numberOfLines={1} ellipsizeMode="tail" style={{fontSize: 14, color: 'rgba(251,108,0,0.5)', paddingTop: 3}}>
                        Rate: {item.data['job-price-start']} - {item.data['job-price-end']}
                      </Text>
                    </View>

                    <Image 
                    source={require('../assets/Next_page.png')} 
                    resizeMode='contain' style={{
                      height: 35,
                      width: 35
                    }}
                    />

                  </View>

                </View>
              </Pressable>
            )
          }
        />
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
  rowLayout: {
    backgroundColor: Colors.white,
    marginBottom: 15,
    width: '100%',
    alignSelf: 'center',
    borderRadius: 10,
    height: 100
  },
  scroll: {
    backgroundColor: 'rgba(255,255,255,0.5)',
    borderRadius: 20,
    padding: 15,
    margin: 15,
    marginTop: 40
  },
  rowHeader: {
    backgroundColor: Colors.card_header,
    flex: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  rowBody: {
    backgroundColor: Colors.white,
    flex: 9,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  }

});
