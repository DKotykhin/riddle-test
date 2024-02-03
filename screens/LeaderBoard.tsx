import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { Header } from '../components/Header';
import { Schedule } from '../components/Schedule';
import { AnswerForm } from '../components/AnswerForm';

const riddle = {
  text: `I can add to several hundred. But can't subtract, multiply, or divide. Whatever I add to, it's always in front of you but never behind. And the number I add to, you can't really hide!`,
  question: 'Who am I?',
  answer: 'Age',
};

export const LeaderBoard = () => {

  const [attemptNumber, setAttemptNumber] = useState<number>(5);

  const setNewAttemptNumber = (value: number) => {
    setAttemptNumber(value);
  };

  const attemptNumberFn = () => {
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
          <Schedule setNewAttemptNumber={setNewAttemptNumber} />
          <View style={styles.text_wrapper}>
            <Text style={styles.text}>
              {riddle.text}
            </Text>
            <Text style={styles.subtitle}>
              {riddle.question}
            </Text>
          </View>
          <AnswerForm answer={riddle.answer} attemptNumber={attemptNumber} attemptNumberFn={attemptNumberFn} />
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
    width: '76%',
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
    marginVertical: 10,
    color: '#5F6F89',
  }
});
