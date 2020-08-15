import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar, Text, View } from 'react-native';

const MoviesHome = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.mainView}>
          <Text>What's popular?</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  mainView: {
    flex: 1,
  },
});

export default MoviesHome;
