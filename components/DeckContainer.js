import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default DeckContainer = ({ name, numberOfCards, onPress }) => (
  <TouchableOpacity 
    style={styles.deckContainer} 
    onPress={onPress}
  >
    <View style={{ alignItems: 'center' }}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.cards}>{numberOfCards || 0} cards</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  deckContainer: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    justifyContent: 'center',
    height: 180
  }
});