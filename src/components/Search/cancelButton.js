import React from 'react';
import { StyleSheet, TouchableHighlight, Text, View } from 'react-native';

const CancelButton = () => {
  return (
    <TouchableHighlight>
      <View style={styles.buttonWrapper}>
        <Text style={styles.buttonLabel}>Cancel</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    height: 20,
    marginLeft: 15,
  },
  buttonLabel: {
    color: '#0B253F',
    fontSize: 16,
  },
});

export default CancelButton;
