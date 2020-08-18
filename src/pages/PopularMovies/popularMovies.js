import React, { useState } from 'react';
import {
  SafeAreaView,
  Platform,
  StyleSheet,
  StatusBar,
  View,
} from 'react-native';

import { Search, TextTMDB, Loader } from '../../components';

import MoviesList from './moviesList';
import useMoviesList from '../../services/hooks/useMoviesList';

const PopularMovies = () => {
  const [
    movies,
    fetchMoreMovies,
    refreshMovies,
    isRefreshing,
    isLoading,
    setEndpoint,
    setQuery,
    clearMovies,
  ] = useMoviesList();
  const [isSearchActive, setIsSearchActive] = useState(false);
  const popularTitle = "What's popular?";

  const handleSearchStart = () => {
    clearMovies([]);
    setEndpoint('/search/movie');
    setIsSearchActive(true);
  };

  const handleSearchCancel = () => {
    setEndpoint('/movie/popular');
    refreshMovies();
    setIsSearchActive(false);
    setQuery('');
  };

  const handleSearchQuery = (query) => {
    clearMovies([]);
    setQuery(query);
  };

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#0B253F" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.mainView}>
          <Search
            onSearchStart={handleSearchStart}
            onSearchQuery={handleSearchQuery}
            onSearchCancel={handleSearchCancel}
            isSearchActive={isSearchActive}
          />

          {isSearchActive && movies.length > 0 ? (
            <TextTMDB
              customTextStyles={
                styles.searchTitle
              }>{`Showing ${movies.length} results`}</TextTMDB>
          ) : null}

          {!isSearchActive ? (
            <TextTMDB customTextStyles={styles.popularTitle}>
              {popularTitle}
            </TextTMDB>
          ) : null}

          <MoviesList
            movies={movies}
            fetchMoreMovies={fetchMoreMovies}
            refreshMovies={refreshMovies}
            isRefreshing={isRefreshing}
          />
          <Loader isActive={isLoading} />
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
  searchTitle: {
    color: '#000',
    fontSize: 18,
    marginVertical: 15,
  },
  popularTitle: {
    fontSize: 20,
    fontWeight: Platform.OS === 'ios' ? '500' : 'bold',
    marginVertical: 15,
  },
});

export default PopularMovies;
