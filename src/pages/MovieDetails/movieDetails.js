import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { TextH1, TextTMDB } from '../../components';
import ImageCaption from './imageCaption';
import CreditsList from './creditsList';
import useMovieDetails from '../../services/hooks/useMovieDetails';

//todo: image overlay linear gradient if time

const MovieDetails = () => {
  const route = useRoute();
  const [movie] = useMovieDetails(route.params.movieItemId);
  console.log('movie details', movie);

  const {
    backdrop_path,
    title,
    overview,
    genres,
    cast,
    crew,
    release_date,
    release_year,
    runtime,
  } = movie;

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        {backdrop_path ? (
          <ImageCaption
            {...{
              backdrop_path,
              title,
              release_year,
              release_date,
              genres,
              runtime,
            }}
          />
        ) : null}
        <View style={styles.overviewSectionContainer}>
          <View>
            <TextH1 text="Overview" />
          </View>
          <View>
            <TextTMDB {...styles.textBlack}>{overview}</TextTMDB>
          </View>
          <CreditsList {...{ cast, crew }} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  overviewSectionContainer: {
    padding: 16,
  },
  textBlack: {
    color: '#000',
  },
});

export default MovieDetails;
