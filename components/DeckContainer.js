import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default DeckContainer = ({ title, questions, onPress }) => (
  <TouchableOpacity 
    style={styles.deckContainer} 
    onPress={onPress}
  >
    <View style={{ alignItems: 'center' }}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.cards}>{questions.length || 0} cards</Text>
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