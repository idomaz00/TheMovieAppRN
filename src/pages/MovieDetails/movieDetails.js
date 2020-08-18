import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Platform,
  View,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { TextTMDB, Loader } from '../../components';
import ImageCaption from './imageCaption';
import CreditsList from './creditsList';
import useMovieDetails from '../../services/hooks/useMovieDetails';

//todo: image overlay linear gradient if time

const MovieDetails = () => {
  const route = useRoute();
  const [movie, isLoading] = useMovieDetails(route.params.movieItemId);
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
      <ScrollView bounces={false}>
        <ImageCaption
          backdropPath={backdrop_path}
          title={title}
          releaseYear={release_year}
          releaseDate={release_date}
          genres={genres}
          runtime={runtime}
        />
        <View style={styles.overviewSectionContainer}>
          <View>
            <TextTMDB customTextStyles={styles.overviewTitle}>
              Overview
            </TextTMDB>
          </View>
          <View>
            <TextTMDB customTextStyles={styles.textBlack}>{overview}</TextTMDB>
          </View>
          <CreditsList cast={cast} crew={crew} />
        </View>
        <Loader isActive={isLoading} />
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
  overviewTitle: {
    fontWeight: Platform.OS === 'ios' ? '500' : 'bold',
    fontSize: 20,
    marginVertical: 15,
  },
});

export default MovieDetails;
