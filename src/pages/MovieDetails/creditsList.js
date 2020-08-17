import React from 'react';
import { StyleSheet, Platform, View, Dimensions } from 'react-native';

import { TextTMDB } from '../../components';

const CreditsList = ({ cast, crew }) => {
  return (
    <View style={styles.creditsContainer}>
      {cast && cast.length
        ? cast.map((member) => (
            <View style={styles.creditItem} key={member.id.toString()}>
              <TextTMDB customTextStyles={styles.creditName}>
                {member.name}
              </TextTMDB>
              <TextTMDB customTextStyles={styles.creditRole}>
                {member.character}
              </TextTMDB>
            </View>
          ))
        : null}
      {crew && crew.length
        ? crew.map((member) => (
            <View style={styles.creditItem} key={member.id.toString()}>
              <TextTMDB customTextStyles={styles.creditName}>
                {member.name}
              </TextTMDB>
              <TextTMDB customTextStyles={styles.creditRole}>
                {member.job}
              </TextTMDB>
            </View>
          ))
        : null}
    </View>
  );
};

const styles = StyleSheet.create({
  creditsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginTop: 5,
  },
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

export default CreditsList;
