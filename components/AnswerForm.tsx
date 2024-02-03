import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Alert } from 'react-native';

import StyledButton from './StyledButton';

interface AnswerFormProps {
	answer?: string;
	attemptNumber: number;
	attemptNumberFn: (arg: boolean) => void;
}

export const AnswerForm = ({ answer, attemptNumber, attemptNumberFn }: AnswerFormProps) => {
	const [inputValue, setInputValue] = useState('');

	const handleSubmit = () => {
		if (inputValue.trim() === '') {
			Alert.alert('Invalid Answer', 'Please enter a valid answer');
			return;
		}
		const isCorrect = inputValue.toLowerCase() === answer?.toLowerCase();
		attemptNumberFn(isCorrect);
		setInputValue('');
		if (!isCorrect) {
			Alert.alert('Incorrect Answer', 'Try again');
			return;
		}
		Alert.alert('Correct Answer', 'Good job!');
	};

	return (
		<View style={styles.container}>
			<TextInput
				style={styles.input}
				value={inputValue}
				onChangeText={setInputValue}
				placeholder="Your answer"
				placeholderTextColor={'#5F6F89'}
			/>
			<StyledButton
				title="Submit"
				onPress={handleSubmit}
				disabled={attemptNumber === 0}
			/>
			<Text style={styles.attempts}>{attemptNumber} attempts remaining</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop: 20,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 10,
	},
	input: {
		width: 310,
		height: 72,
		borderColor: '#fff',
		borderWidth: 2,
		padding: 20,
		marginBottom: 20,
		borderRadius: 24,
	},
	attempts: {
		marginTop: 20,
		fontSize: 16,
		color: '#5F6F89',
	},
});
