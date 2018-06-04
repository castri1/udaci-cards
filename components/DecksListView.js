import React, { Component } from 'react';
import { FlatList, View, Text, StyleSheet, TouchableOpacity, StatusBar, Platform } from 'react-native';
import { connect } from 'react-redux';
import DeckContainer from './DeckContainer';
import { getDecks, clear } from '../utils/storage';
import { loadDecks } from '../actions';
import { Constants } from 'expo';

class DecksListView extends Component {
  static navigationOptions = {
    title: 'Decks',
    header: null
  };

  componentWillMount() {
    const { dispatch } = this.props;
    getDecks()
      .then(decks => {
        dispatch(loadDecks(decks));
      });
  }

  shouldComponentUpdate(props, nextState) {
    return (props.decks.length !== this.props.decks.length)
      || (props.totalQuestions !== this.props.totalQuestions);
  }

  onPress = (title) => {
    this.props.navigation.navigate('DeckView', { title });
  }

  render() {
    const { decks } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          backgroundColor={'#5E8D48'}
          translucent
        />
        <FlatList
          data={decks}
          keyExtractor={(item, index) => item.title}
          renderItem={({ item, index }) => <DeckContainer onPress={() => this.onPress(item.title)} {...item} />}
        >
        </FlatList>
      </View>
    );
  }
}

function mapStateToProps(decks) {
  const totalQuestions = decks.reduce((total, { questions }) => total + questions.length, 0);
  return {
    decks,
    totalQuestions
  };
}

export default connect(mapStateToProps)(DecksListView);
