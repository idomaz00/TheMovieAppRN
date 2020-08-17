import React from 'react';
import {
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const defaultImage = require('../../assets/film-placeholder.png');

const MoviesList = ({
  movies,
  fetchMoreMovies,
  refreshMovies,
  isRefreshing,
}) => {
  const navigation = useNavigation();

  const handleOnPress = (item) => {
    console.log(item);
    navigation.navigate('MovieDetails', { movieItemId: item.id });
  };

  const renderRow = ({ item }) => {
    const posterImage = item.poster_path
      ? {
          uri: `https://image.tmdb.org/t/p/w185${item.poster_path}`,
        }
      : defaultImage;
    return (
      <TouchableOpacity onPress={() => handleOnPress(item)}>
        <Image
          source={posterImage}
          defaultImage={defaultImage}
          style={styles.logoImage}
          resizeMode="cover"
        />
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      scrollEnabled={true}
      columnWrapperStyle={styles.list}
      numColumns={3}
      data={movies}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderRow}
      onEndReached={fetchMoreMovies}
      onEndReachedThreshold={0.5}
      onRefresh={refreshMovies}
      refreshing={isRefreshing}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    justifyContent: 'space-between',
  },
  logoImage: {
    height: Math.floor(0.45 * Dimensions.get('window').width),
    width: Math.floor(0.3 * Dimensions.get('window').width),
    borderRadius: 5,
    marginVertical: 10,
  },
});

export default MoviesList;
