import React, { Component } from 'react';
import { FlatList, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import DeckContainer from './DeckContainer';

const decks = [
  { name: 'React', numberOfCards: 5 },
  { name: 'Javascript', numberOfCards: 1 },
  { name: 'Native', numberOfCards: null },
];

export default class DecksListView extends Component {
  static navigationOptions = {
    title: 'Decks',
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={decks}
          keyExtractor={(item, index) => item.name}
          renderItem={({ item, index }) => <DeckContainer {...item} />}
        >
        </FlatList>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    color: '#000',
    fontSize: 20,
    marginBottom: 15
  },
  cards: {
    color: '#ccc',
    fontSize: 15
  }
});
