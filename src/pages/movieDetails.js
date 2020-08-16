import React from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';

const MovieDetails = () => {
  const route = useRoute();
  console.log('route.params', route);
  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <Text>{route.params.movieId}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

export default MovieDetails;
