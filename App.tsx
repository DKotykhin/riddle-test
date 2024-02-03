import { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Font from 'expo-font';

import { Navigation } from './components/Navigation';

export default function App() {

  const [isReady, setIsReady] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      'poppins-300': require('./assets/fonts/Poppins-Light.ttf'),
      'poppins-400': require('./assets/fonts/Poppins-Regular.ttf'),
      'poppins-500': require('./assets/fonts/Poppins-Medium.ttf'),
      'poppins-600': require('./assets/fonts/Poppins-SemiBold.ttf'),
      'poppins-700': require('./assets/fonts/Poppins-Bold.ttf'),
      'poppins-800': require('./assets/fonts/Poppins-ExtraBold.ttf'),
    });
    setIsReady(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  if (!isReady) {
    return (
      <View style={styles.container}>
        <Text>
          Loading Fonts...
        </Text>
      </View>
    );
  }

  return <Navigation />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
});

