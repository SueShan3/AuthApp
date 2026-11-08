import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {LockKeyhole} from 'lucide-react-native';

const AppLogo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <LockKeyhole
          width={38}
          height={38}
          color="#FFFFFF"
        />
      </View>

      <Text style={styles.appName}>AuthApp</Text>
      <Text style={styles.tagline}>Secure. Simple. Together.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 35,
  },
  logoContainer: {
    width: 75,
    height: 75,
    backgroundColor: '#2563EB',
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  appName: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#0F172A',
  },
  tagline: {
    fontSize: 13,
    color: '#64748B',
    marginTop: 5,
  },
});

export default AppLogo;