import React from 'react';
import { StyleSheet, Image } from 'react-native';

const logoImageUrl = require('../assets/tmdb-logo.png');

const LogoTitle = () => {
  return (
    <Image
      source={logoImageUrl}
      style={styles.logoImage}
      resizeMode="contain"
    />
  );
};

const styles = StyleSheet.create({
  logoImage: {
    width: 150,
  },
});

export default LogoTitle;
