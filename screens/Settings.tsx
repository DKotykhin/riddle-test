import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Settings = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0F2FF',
  },
  title: {
    textAlign: 'center',
    fontSize: 32,
    fontStyle: 'normal',
  },
});
