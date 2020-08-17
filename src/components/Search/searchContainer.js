import React from 'react';
import { StyleSheet, View } from 'react-native';

import SearchTextInput from './searchTextInput';
import CancelButton from './cancelButton';

const SearchContainer = ({
  isSearchActive,
  onSearchStart,
  onSearchCancel,
  onSearchQuery,
}) => {
  return (
    <View style={styles.container}>
      <SearchTextInput
        isSearchActive={isSearchActive}
        onSearchStart={onSearchStart}
        onSearchQuery={onSearchQuery}
      />
      {isSearchActive && <CancelButton handleCancelSearch={onSearchCancel} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
});

export default SearchContainer;
