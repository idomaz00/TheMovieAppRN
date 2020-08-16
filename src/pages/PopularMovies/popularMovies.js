import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar, View } from 'react-native';

import { Search, TextH1 } from '../../components';

import MoviesList from './moviesList';

const PopularMovies = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#0B253F" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.mainView}>
          <Search />
          <TextH1 text="What's popular?" />
          <MoviesList />
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
