import React from 'react';
import { StyleSheet, View } from 'react-native';

import SearchTextInput from './searchTextInput';
import CancelButton from './cancelButton';

const SearchContainer = () => {
  return (
    <View style={styles.container}>
      <SearchTextInput />
      <CancelButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default SearchContainer;
