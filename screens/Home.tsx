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
          <Image source={require('../assets/images/riddle-1.png')} style={styles.main_image} />
          <View style={styles.image_box} >
            <View style={styles.days_box}>
              <View style={styles.days_text_box}>
                <Text style={styles.days_title}>3 Days</Text>
                <Text style={styles.days_title}>Exp. Riddles</Text>
                <View style={{ marginTop: 10 }}>
                  <Text style={styles.days_subtitle}>3 days</Text>
                  <Text style={styles.days_subtitle}>for solving</Text>
                </View>
              </View>
              <Image source={require('../assets/images/3.png')} style={styles.days_image} />
            </View>
            <View style={styles.days_box}>
              <View style={styles.days_text_box}>
                <Text style={styles.days_title}>1 Days</Text>
                <Text style={styles.days_title}>Exp. Riddles</Text>
                <View style={{ marginTop: 10 }}>
                  <Text style={styles.days_subtitle}>1 day for</Text>
                  <Text style={styles.days_subtitle}>solving</Text>
                </View>
              </View>
              <Image source={require('../assets/images/1.png')} style={styles.days_image} />
            </View>
          </View>
          <View style={styles.bottom_box}>
            <View style={styles.bottom_text_box}>
              <Text style={styles.bottom_title}>Special Brand Riddles</Text>
              <Text style={styles.bottom_subtitle}>Riddles related with popular brands such as</Text>
              <View style={styles.brands_box}>
                <Image source={require('../assets/images/nike.png')} style={styles.brand_image} />
                <Image source={require('../assets/images/mac.png')} style={styles.brand_image} />
                <Image source={require('../assets/images/lego.png')} style={styles.brand_image} />
              </View>
            </View>
            <Image source={require('../assets/images/brand.png')} style={styles.bottom_image} />
          </View>
        </SafeAreaView>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
  },
  main_image: {
    width: 340,
    height: 200,
  },
  image_box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 320,
    marginVertical: 10,
  },
  days_box: {
    position: 'relative',
    marginVertical: 10,
    width: 150,
    height: 166,
    backgroundColor: '#F0F2FF',
    borderRadius: 20,
    borderColor: '#fff',
    borderWidth: 2,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 0,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 4,
    // elevation: 5,
  },
  days_text_box: {
    marginTop: 54,
    marginLeft: 20,

  },
  days_title: {
    fontFamily: 'poppins-800',
    fontSize: 14,
    lineHeight: 20,
  },
  days_subtitle: {
    fontFamily: 'poppins-500',
    color: '#5F6F89',
    fontSize: 12,
    lineHeight: 18,
  },
  days_image: {
    width: 155,
    height: 184,
    position: 'absolute',
    top: -24,
    right: -10,
  },
  bottom_box: {
    position: 'relative',
    width: 320,
    height: 200,
    backgroundColor: '#F0F2FF',
    borderRadius: 20,
    borderColor: '#fff',
    borderWidth: 2,
  },
  bottom_image: {
    position: 'absolute',
    top: -32,
    right: -60,
    width: 280,
    height: 240,
  },
  bottom_text_box: {
    marginTop: 24,
    marginLeft: 20,
    width: 112,
  },
  bottom_title: {
    fontFamily: 'poppins-800',
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 10,
  },
  bottom_subtitle: {
    fontFamily: 'poppins-500',
    color: '#5F6F89',
    fontSize: 12,
    lineHeight: 18,
  },
  brands_box: {
    flexDirection: 'row',
    marginTop: 20,
  },
  brand_image: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  gradient: {
    flex: 1,
  },
});
