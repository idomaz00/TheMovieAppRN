import React from 'react';
import {
  StyleSheet,
  Platform,
  View,
  Text,
  ImageBackground,
  Dimensions,
} from 'react-native';

import { TextTMDB } from '../../components';

const defaultImage = require('../../assets/film-placeholder.png');

const ImageCaption = ({
  backdropPath,
  title,
  releaseYear,
  releaseDate,
  genres,
  runtime,
}) => {
  const backdropImage = backdropPath
    ? {
        uri: `https://image.tmdb.org/t/p/w780${backdropPath}`,
      }
    : defaultImage;
  return (
    <ImageBackground
      source={backdropImage}
      style={styles.movieImage}
      resizeMode="cover">
      <View style={styles.imageCaptionContainer}>
        <View style={styles.titleContainer}>
          <TextTMDB {...styles.titleStyle}>
            {title}
            {releaseYear ? <Text>({releaseYear})</Text> : null}
          </TextTMDB>
        </View>
        <View style={styles.releaseContainer}>
          {releaseDate ? (
            <TextTMDB {...styles.textWhite}>{releaseDate}</TextTMDB>
          ) : null}
        </View>
        <View style={styles.genresContainer}>
          {genres && genres.length
            ? genres.map((genre, index) => (
                <View key={genre.id.toString()}>
                  <TextTMDB {...styles.textWhite}>
                    {genre.name}
                    {genres.length > 1 && genres.length - 1 !== index
                      ? ', '
                      : null}
                  </TextTMDB>
                </View>
              ))
            : null}
          <View style={styles.runtimeContainer}>
            {runtime !== '' ? (
              <TextTMDB {...styles.textRuntime}>{runtime}</TextTMDB>
            ) : null}
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  movieImage: {
    height: 0.45 * Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  imageCaptionContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    paddingHorizontal: 16,
    paddingVertical: 10,
    //
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
  },
  titleContainer: {
    marginVertical: 5,
  },
  titleStyle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: Platform.OS === 'ios' ? '500' : 'bold',
  },
  releaseContainer: {
    marginVertical: 5,
  },
  textWhite: {
    color: '#fff',
  },
  textRuntime: {
    color: '#fff',
    fontWeight: Platform.OS === 'ios' ? '500' : 'bold',
  },
  runtimeContainer: {
    marginHorizontal: 10,
  },
  genresContainer: {
    flexDirection: 'row',
  },
});

export default ImageCaption;
