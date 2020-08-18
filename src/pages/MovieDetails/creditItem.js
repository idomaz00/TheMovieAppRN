import React from 'react';
import { StyleSheet, View, Dimensions, Platform } from 'react-native';
import { TextTMDB } from '../../components';

const CreditItem = ({ itemName, itemRole }) => {
  return (
    <View style={styles.creditItem}>
      <TextTMDB customTextStyles={styles.creditName}>{itemName}</TextTMDB>
      <TextTMDB customTextStyles={styles.creditRole}>{itemRole}</TextTMDB>
    </View>
  );
};

const styles = StyleSheet.create({
  creditItem: {
    width: 0.3 * Dimensions.get('window').width,
    marginVertical: 15,
  },
  creditName: {
    fontWeight: Platform.OS === 'ios' ? '600' : 'bold',
    textAlign: 'center',
    color: '#000',
  },
  creditRole: {
    textAlign: 'center',
    color: '#000',
  },
});

export default CreditItem;
