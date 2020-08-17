import React from 'react';
import { StyleSheet, Text } from 'react-native';

const TextTMDB = ({
  fontSize = 14,
  color = '#0B253F',
  fontWeight = 'normal',
  textAlign = 'left',
  customTextStyles = {},
  children,
}) => {
  return (
    <Text
      style={[
        styles.textStyle,
        {
          fontSize,
          color,
          fontWeight,
        },
        customTextStyles,
      ]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 14,
    color: '#0B253F',
    fontWeight: 'normal',
    // android does not respect font weight property expressed in numbers
    // fontWeight: Platform.OS === 'ios' ? '500' : 'bold', //todo: replace for android with semi bold font family
  },
});

export default TextTMDB;
