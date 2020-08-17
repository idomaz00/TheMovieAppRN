import React from 'react';
import {
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import usePopularMovies from '../../services/hooks/usePopularMovies';

const MoviesList = () => {
  const navigation = useNavigation();
  const [
    movies,
    fetchMoreMovies,
    refreshMovies,
    isRefreshing,
  ] = usePopularMovies();

  const handleOnPress = (item) => {
    console.log(item);
    navigation.navigate('MovieDetails', { movieItemId: item.id });
  };

  const renderRow = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => handleOnPress(item)}>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w185${item.poster_path}`,
          }}
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
