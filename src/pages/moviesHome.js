import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar, Text, View } from 'react-native';

const MoviesHome = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#0B253F" />
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
