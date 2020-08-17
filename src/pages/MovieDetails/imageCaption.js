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

const ImageCaption = ({
  backdrop_path,
  title,
  release_year,
  release_date,
  genres,
  runtime,
}) => {
  return (
    <ImageBackground
      source={{ uri: `https://image.tmdb.org/t/p/w780${backdrop_path}` }}
      style={styles.movieImage}
      resizeMode="cover">
      <View style={styles.imageCaptionContainer}>
        <View style={styles.titleContainer}>
          <TextTMDB {...styles.titleStyle}>
            {title}
            {release_year ? <Text>({release_year})</Text> : null}
          </TextTMDB>
        </View>
        <View style={styles.releaseContainer}>
          {release_date ? (
            <TextTMDB {...styles.textWhite}>{release_date}</TextTMDB>
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
