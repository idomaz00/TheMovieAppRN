import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar, Text, View } from 'react-native';

import { Search } from '../components';

const PopularMovies = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#0B253F" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.mainView}>
          <Search />
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
    flex: 2,
    padding: 15,
  },
});

export default PopularMovies;
