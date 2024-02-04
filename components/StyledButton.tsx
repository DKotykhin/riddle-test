import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface StyledButtonProps {
  onPress: () => void;
  title: string;
  disabled?: boolean;
}

const StyledButton = ({ onPress, title, disabled }: StyledButtonProps) => (
  <LinearGradient
    colors={['#8FD45B', '#78C83D']}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
    style={styles.gradient}
  >
    <TouchableOpacity style={[styles.button, disabled && styles.button_disabled]} onPress={onPress} disabled={disabled}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  </LinearGradient>
);

const styles = StyleSheet.create({
  button: {
    width: 300,
    height: 72,
    borderColor: '#fff',
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  button_disabled: {
    backgroundColor: "#D3D3D3",
  },
  text: {
    fontSize: 16,
    color: "#fff",
    fontFamily: "poppins-700",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  gradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 24,
    minWidth: 20,
    minHeight: 20,
  },
});

export default StyledButton;
