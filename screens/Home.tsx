import React from 'react';
import { StyleSheet, Text, SafeAreaView, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { Header } from '../components/Header';

export const Home = () => {

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#F0F2FF', '#E7EBFF']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
      >
        <SafeAreaView style={styles.wrapper}>
          <Header />
          <Image source={require('../assets/images/riddle-1.png')} style={styles.image_1} />
          <View style={styles.image_box} >
            <Image source={require('../assets/images/3.png')} style={styles.image_2} />
            <Image source={require('../assets/images/1.png')} style={styles.image_3} />
          </View>
          <Text style={styles.text}>Home</Text>
          <Image source={require('../assets/images/brand.png')} style={styles.image_4} />
        </SafeAreaView>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: '#F0F2FF',
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  image_box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 320,
    marginVertical: 10,
  },
  image_1: {
    width: 320,
    height: 200,
  },
  image_2: {
    width: 155,
    height: 184,
  },
  image_3: {
    width: 155,
    height: 184,
  },
  image_4: {
    width: 228,
    height: 214,
  },
  text: {
    fontFamily: 'poppins-800',
    fontSize: 20,
    color: '#000',
  },
  gradient: {
    flex: 1,
  },
});
