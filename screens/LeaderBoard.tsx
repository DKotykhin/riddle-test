import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { Header } from '../components/Header';
import { Schedule } from '../components/Schedule';
import { AnswerForm } from '../components/AnswerForm';
import { riddleApi } from '../api/riddleApi';

interface Riddle {
  text: string;
  question: string;
  answer: string;
}

const totalAttempts = 5;

export const LeaderBoard = () => {

  const [attemptNumber, setAttemptNumber] = useState<number>(5);
  const [riddle, setRiddle] = useState<Riddle>(riddleApi);

  const changeRiddle = () => {
    setAttemptNumber(totalAttempts);
    setRiddle(riddleApi);
  };

  const attemptNumberFn = (isCorrect: boolean) => {
    if (isCorrect) {
      setAttemptNumber(totalAttempts);
      setRiddle(riddleApi);
      return;
    }
    setAttemptNumber(attemptNumber - 1);
  };

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
          <Schedule changeRiddle={changeRiddle} />
          <View style={styles.text_wrapper}>
            <Text style={styles.text}>
              {riddle?.text}
            </Text>
            <Text style={styles.subtitle}>
              {riddle?.question}
            </Text>
          </View>
          <AnswerForm answer={riddle?.answer} attemptNumber={attemptNumber} attemptNumberFn={attemptNumberFn} />
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
    // justifyContent: 'center',
  },
  gradient: {
    flex: 1,
  },
  text_wrapper: {
    width: 310,
    marginHorizontal: '12%',
  },
  text: {
    fontSize: 16,
    marginVertical: 10,
    lineHeight: 28,
    color: '#5F6F89',
    fontFamily: 'poppins-400',
  },
  subtitle: {
    fontSize: 20,
    fontFamily: 'poppins-700',
    marginTop: 10,
    color: '#5F6F89',
  }
});
