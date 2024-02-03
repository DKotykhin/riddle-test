import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface StyledButtonProps {
  onPress: () => void;
  title: string;
  disabled?: boolean;
}

const StyledButton = ({ onPress, title, disabled }: StyledButtonProps) => (
  <TouchableOpacity style={[styles.button, disabled && styles.button_disabled]} onPress={onPress} disabled={disabled}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    width: 300,
    height: 72,
    borderColor: '#fff',
    borderRadius: 24,
    backgroundColor: "#8FD45B",
    justifyContent: "center",
    alignItems: "center",
    elevation: 8,
    shadowColor: "rgba(0,0,0,0.4)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  button_disabled: {
    backgroundColor: "#D3D3D3",
  },
  text: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
});

export default StyledButton;
