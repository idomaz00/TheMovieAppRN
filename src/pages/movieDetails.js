import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  View,
  Text,
  ImageBackground,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { TextH1 } from '../components';
import useMovieDetails from '../services/hooks/useMovieDetails';

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
      <ImageBackground
        source={{ uri: `https://image.tmdb.org/t/p/w780${backdrop_path}` }}
        style={styles.movieImage}
        resizeMode="cover">
        <View>
          <Text>{title}</Text>
          {release_year ? <Text>({release_year})</Text> : null}
        </View>
        <View>{release_date ? <Text>({release_date})</Text> : null}</View>
        <View>
          {genres && genres.length
            ? genres.map((genre) => (
                <View>
                  <Text>{genre}</Text>
                </View>
              ))
            : null}
        </View>
        <View>{runtime !== '' ? <Text>({runtime})</Text> : null}</View>
      </ImageBackground>
      <View>
        <TextH1 text="Overview" />
      </View>
      <View>
        <Text>{overview}</Text>
      </View>
      <View>
        {cast && cast.length
          ? cast.map((member) => (
              <View>
                <Text>{member.name}</Text>
                <Text>{member.character}</Text>
              </View>
            ))
          : null}
      </View>
      <View>
        {crew && crew.length
          ? crew.map((member) => (
              <View>
                <Text>{member.name}</Text>
                <Text>{member.job}</Text>
              </View>
            ))
          : null}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  movieImage: {
    height: 0.5 * Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
});

export default MovieDetails;
