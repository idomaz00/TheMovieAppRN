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
          textAlign,
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
  },
});

export default TextTMDB;
