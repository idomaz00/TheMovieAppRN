import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  StyleSheet,
  TextInput,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';

import debounce from 'lodash.debounce';

const searchIconUrl = require('../../assets/search-icon.png');
const clearIconUrl = require('../../assets/clear-icon.png');

const SearchTextInput = ({ isSearchActive, onSearchStart, onSearchQuery }) => {
  const [searchText, setSearchText] = useState('');
  const inputRef = useRef(null);

  const handleClearSearch = () => {
    setSearchText('');
  };

  const handleTextChange = (text) => {
    setSearchText(text);
  };

  const handleInputFocus = () => {
    onSearchStart();
  };

  useEffect(() => {
    if (!isSearchActive) {
      inputRef.current.blur();
      setSearchText('');
    }
  }, [isSearchActive]);

  const querySearchQuery = () => {
    if (searchText.length >= 3) {
      onSearchQuery(searchText);
    }
  };

  const debouncedQuery = useCallback(debounce(querySearchQuery, 500), [
    searchText,
  ]);

  useEffect(() => {
    debouncedQuery();

    return debouncedQuery.cancel;
  }, [debouncedQuery, searchText]);

  return (
    <View style={styles.mainContainer}>
      <Image source={searchIconUrl} style={styles.searchIcon} />
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.textInput}
          placeholder="Search"
          placeholderTextColor="rgba(11, 37, 63, 0.5)"
          selectionColor="#0B253F"
          onFocus={handleInputFocus}
          onChangeText={handleTextChange}
          value={searchText}
          ref={inputRef}
        />
      </View>
      <TouchableOpacity onPress={handleClearSearch}>
        <Image source={clearIconUrl} style={styles.clearIcon} />
      </TouchableOpacity>
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
