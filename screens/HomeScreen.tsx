import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { Header } from '../components/Header';
import { DaysBox } from '../components/DaysBox';
import { WeeklyBox } from '../components/WeeklyBox';
import { BottomBox } from '../components/BottomBox';

export const HomeScreen = () => {

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
          <WeeklyBox
            title="Weekly Riddle"
            subtitle="Riddles you need to solve weekly"
            image={require('../assets/images/questions.png')}
          />
          <View style={styles.image_box} >
            <DaysBox
              title_1="3 Days"
              title_2="Exp. Riddles"
              subtitle_1="3 days"
              subtitle_2="for solving"
              image={require('../assets/images/3.png')}
            />
            <DaysBox
              title_1="1 Days"
              title_2="Exp. Riddles"
              subtitle_1="1 day for"
              subtitle_2="solving"
              image={require('../assets/images/1.png')}
            />
          </View>
          <BottomBox />
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
  image_box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 320,
    marginVertical: 10,
  },
  gradient: {
    flex: 1,
  },
});
