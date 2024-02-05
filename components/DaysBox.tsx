import React from 'react';
import { StyleSheet, Text, View, Image, ImageSourcePropType } from 'react-native';

interface DaysBoxProps {
  title_1: string;
  title_2: string;
  subtitle_1: string;
  subtitle_2: string;
  image: ImageSourcePropType;
}

export const DaysBox = ({ title_1, title_2, subtitle_1, subtitle_2, image }: DaysBoxProps) => {
  return (
    <View style={styles.box}>
      <View style={styles.text_box}>
        <Text style={styles.title}>{title_1}</Text>
        <Text style={styles.title}>{title_2}</Text>
        <View style={{ marginTop: 10 }}>
          <Text style={styles.subtitle}>{subtitle_1}</Text>
          <Text style={styles.subtitle}>{subtitle_2}</Text>
        </View>
      </View>
      <Image source={image} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    position: 'relative',
    marginVertical: 10,
    width: 150,
    height: 166,
    backgroundColor: '#F0F2FF',
    borderRadius: 24,
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
    marginTop: 54,
    marginLeft: 20,

  },
  title: {
    fontFamily: 'poppins-800',
    fontSize: 14,
    lineHeight: 20,
  },
  subtitle: {
    fontFamily: 'poppins-500',
    color: '#5F6F89',
    fontSize: 12,
    lineHeight: 18,
  },
  image: {
    width: 155,
    height: 184,
    position: 'absolute',
    top: -28,
    right: -18,
  },
});
