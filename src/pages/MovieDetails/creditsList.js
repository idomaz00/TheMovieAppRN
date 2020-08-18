import React from 'react';
import { StyleSheet, View } from 'react-native';
import CreditItem from './creditItem';

const CreditsList = ({ cast, crew }) => {
  return (
    <View style={styles.creditsContainer}>
      {cast && cast.length
        ? cast.map((member) => (
            <CreditItem
              key={member.id.toString()}
              itemId={member.id}
              itemName={member.name}
              itemRole={member.character}
            />
          ))
        : null}
      {crew && crew.length
        ? crew.map((member) => (
            <CreditItem
              key={member.id.toString()}
              itemId={member.id}
              itemName={member.name}
              itemRole={member.job}
            />
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
});

export default CreditsList;
