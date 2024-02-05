import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export const BottomBox = () => {
  return (
    <View style={styles.box}>
      <View style={styles.text_box}>
        <Text style={styles.title}>Special Brand Riddles</Text>
        <Text style={styles.subtitle}>Riddles related with popular brands such as</Text>
        <View style={styles.brands_box}>
          <Image source={require('../assets/images/nike.png')} style={styles.brand_image} />
          <Image source={require('../assets/images/mac.png')} style={styles.brand_image} />
          <Image source={require('../assets/images/lego.png')} style={styles.brand_image} />
        </View>
      </View>
      <Image source={require('../assets/images/brand.png')} style={styles.image} />
    </View>
  )
}

const styles = StyleSheet.create({
  box: {
    position: 'relative',
    width: 320,
    height: 200,
    backgroundColor: '#F0F2FF',
    borderRadius: 20,
    borderColor: '#fff',
    borderBottomWidth: 1,
    borderRightWidth: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.05,
    shadowRadius: 15,
    elevation: 5,
  },
  image: {
    position: 'absolute',
    top: -32,
    right: -60,
    width: 280,
    height: 240,
  },
  text_box: {
    marginTop: 24,
    marginLeft: 20,
    width: 112,
  },
  title: {
    fontFamily: 'poppins-800',
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 10,
  },
  subtitle: {
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
});
