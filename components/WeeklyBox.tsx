import React from 'react';
import { StyleSheet, Text, View, Image, ImageSourcePropType } from 'react-native';

interface DaysBoxProps {
  title: string;
  subtitle: string;
  image: ImageSourcePropType;
}

export const WeeklyBox = ({ title, subtitle, image }: DaysBoxProps) => {
  return (
    <View style={styles.box}>
      <View style={styles.text_box}>
        <Text style={styles.title}>
          {title}
        </Text>
        <Text style={styles.subtitle}>
          {subtitle}
        </Text>
      </View>
      <Image source={image} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    position: 'relative',
    marginVertical: 10,
    width: 320,
    height: 200,
    backgroundColor: '#F0F2FF',
    borderRadius: 28,
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
  text_box: {
    marginTop: 40,
    marginLeft: 20,

  },
  title: {
    fontFamily: 'poppins-800',
    fontSize: 24,
    lineHeight: 30,
    width: 120,
    marginBottom: 20,
  },
  subtitle: {
    fontFamily: 'poppins-500',
    color: '#5F6F89',
    fontSize: 12,
    lineHeight: 18,
    width: 116,
  },
  image: {
    width: 320,
    height: 200,
    position: 'absolute',
    top: -16,
    right: -22,
  },
});
