import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import AppButton from './AppButton';
import { white, black, gray } from '../utils/colors';
import { getDecks, clear } from '../utils/storage';
import { connect } from 'react-redux';
import { loadDeck, loadDecks } from '../actions'
import { HeaderBackButton } from 'react-navigation';

class DeckView extends Component {
  static navigationOptions = ({ navigation }) => ({
      title: navigation.getParam('title', 'Deck')
  });

  onAddCardPress = () => {
    const { title } = this.props;
    this.props.navigation.push('NewQuestionView', { title });
  }

  onStartQuiz = () => {
    const { questions } = this.props;
    if (!questions || questions.length === 0) {
      alert("Please add questions to this deck");
      return;
    }

    this.props.navigation.push('QuizView', { questions });
  }

  render() {
    const { title, questions } = this.props;

    return (
      <View style={styles.container}>
        <View style={{ alignItems: 'center', marginBottom: 150 }}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.cards}>{questions.length || 0} cards</Text>
        </View>
        <View style={{ alignItems: 'center', justifyContent: 'space-between', height: 110 }}>
          <AppButton
            text='Add Card'
            onPress={this.onAddCardPress}
          >
          </AppButton>
          <AppButton
            text='Start Quiz!'
            onPress={this.onStartQuiz}
            btnStyle={styles.starQuizBtn}
            textStyle={{ color: white }}
          >
          </AppButton>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 150,
  },
  title: {
    color: black,
    fontSize: 50
  },
  cards: {
    color: gray,
    fontSize: 30
  },
  addCardBtn: {
    backgroundColor: white,
    borderColor: black
  },
  starQuizBtn: {
    backgroundColor: black,
    borderColor: black,
  }
});

function mapStateToProps(decks, ownProps) {
  const title = ownProps.navigation.getParam('title', 'Deck');
  const deck = decks.find(deck => deck.title === title);
  return {
    ...deck
  }
}

export default connect(mapStateToProps)(DeckView);
