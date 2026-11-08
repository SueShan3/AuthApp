import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

import AppLogo from '../components/AppLogo';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <AppLogo />

      <ActivityIndicator size="large" color="#2563EB" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SplashScreen;