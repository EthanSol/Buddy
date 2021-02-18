import React from 'react';
import { StyleSheet, Text, Picker, View } from 'react-native';

import EffectSelector from './components/EffectSelector';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <EffectSelector/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
