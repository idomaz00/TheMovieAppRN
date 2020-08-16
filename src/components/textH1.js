import React from 'react';
import { StyleSheet, Platform, Text, View } from 'react-native';

const TextH1 = ({ text }) => {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.textStyle}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    marginVertical: 15,
  },
  textStyle: {
    fontSize: 20,
    // android does not respect font weight property expressed in numbers
    fontWeight: Platform.OS === 'ios' ? '500' : 'bold', //todo: replace for android with semi bold font family
  },
});

export default TextH1;
