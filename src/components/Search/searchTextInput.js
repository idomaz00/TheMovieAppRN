import React from 'react';
import { StyleSheet, TextInput, Image, View } from 'react-native';

const searchIconUrl = require('../../assets/search-icon.png');
const clearIconUrl = require('../../assets/clear-icon.png');

const SearchTextInput = () => {
  return (
    <View style={styles.mainContainer}>
      <Image source={searchIconUrl} style={styles.searchIcon} />
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.textInput}
          placeholder="Search"
          placeholderTextColor="rgba(11, 37, 63, 0.5)"
          selectionColor="#0B253F"
        />
      </View>
      <Image source={clearIconUrl} style={styles.clearIcon} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 45,
    backgroundColor: '#EAEAEB',
    borderRadius: 10,
    padding: 2,
  },
  inputWrapper: {
    width: 200,
    flexGrow: 1,
  },
  searchIcon: {
    height: 20,
    width: 20,
    marginHorizontal: 10,
  },
  clearIcon: {
    height: 15,
    width: 15,
    marginHorizontal: 10,
  },
  textInput: {
    color: '#0B253F',
    fontSize: 16,
  },
});

export default SearchTextInput;
