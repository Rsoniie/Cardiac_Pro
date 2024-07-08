// screens/PredictScreen.tsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PredictScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Predict Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PredictScreen;
