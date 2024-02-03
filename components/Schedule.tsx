import React, { useState } from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';

const options = ['Weekly', '3 days', '1 day', 'Special'];

interface ScheduleProps {
  changeRiddle: () => void;
}

export const Schedule = ({ changeRiddle }: ScheduleProps) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handlePress = (option: string) => {
    setSelectedOption(option);
    changeRiddle();
  };

  return (
    <View>
      <View style={styles.container}>
        {options.map((option, index) => (
          <TouchableWithoutFeedback
            key={index}
            onPress={() => handlePress(option)}
          >
            <View
              style={[
                styles.option,
                selectedOption === option && styles.selectedOption
              ]}
            >
              <Text
                style={[
                  styles.optionText,
                  selectedOption === option && styles.selectedText
                ]}
              >
                {option}
              </Text>
            </View>
          </TouchableWithoutFeedback>
        ))}
      </View>
      <Text style={styles.title}>{selectedOption} Riddles</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  option: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 72,
    height: 42,
    borderRadius: 16,
    marginHorizontal: 3,
    backgroundColor: '#FFF',

  },
  selectedOption: {
    shadowColor: '#7ACA40',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.45,
    shadowRadius: 10,
    elevation: 5,
    borderColor: '#7ACA40',
    borderWidth: 2,
  },
  optionText: {
    fontSize: 12,
    color: '#3D444F',
    fontFamily: 'poppins-600',
    opacity: 0.5,
  },
  selectedText: {
    color: '#7ACA40',
    opacity: 1,
  },
  title: {
    fontSize: 24,
    fontFamily: 'poppins-800',
    marginVertical: 10,
    color: '#3D444F',
  },
});

