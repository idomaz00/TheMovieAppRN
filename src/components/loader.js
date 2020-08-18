import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

const Loader = ({ isActive }) => {
  return (
    <View style={styles.loaderPosition}>
      <ActivityIndicator
        size={'large'}
        color={'#0B253F'}
        animating={isActive}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loaderPosition: {
    position: 'absolute',
    top: '50%',
    left: '50%',
  },
});

export default Loader;
