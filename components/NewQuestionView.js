import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import AppButton from './AppButton';
import AppTextInput from './AppTextInput';
import { black, white } from '../utils/colors';
import { getDeck, addCardToDeck, clear } from '../utils/storage';
import { updateDeck } from '../actions';
import { connect } from 'react-redux';

class NewQuestionView extends Component {
  static navigationOptions = ({ navigation }) => {
    const title = navigation.getParam('title', 'Deck');
    return {
      title,
      header: ''
    };
  };
  
  state = {
    question: '',
    answer: ''
  }

  onChangeText = (input, value) => {
    this.setState({
      [input]: value
    });
  }

  onPress = async () => {
    const { question, answer } = this.state;
    if (!question || !answer) {
      alert('Please enter a question and an answer');
      return;
    }

    const { navigation, dispatch, deck } = this.props;
    deck.questions.push(this.state);
    const toUpdate = {
      [deck.title]: deck
    };
    const result = await addCardToDeck(toUpdate);
    dispatch(updateDeck(deck));
    this.setState({
      question: '',
      answer: ''
    });
    navigation.navigate('DeckView', { title: deck.title });
  }

  render() {
    return (
      <View style={styles.container}>
        <AppTextInput
          value={this.state.question} 
          placeholder='Question'
          onChangeText={(question) => this.onChangeText('question', question)}
        />
        <AppTextInput 
          value={this.state.answer}
          placeholder='Answer'
          onChangeText={(answer) => this.onChangeText('answer', answer)}
        />
        <AppButton 
          text='Submit'
          btnStyle={{ backgroundColor: black }}
          textStyle={{ color: white }}
          onPress={this.onPress}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    marginTop: 40,
    alignItems: 'center'
  }
});

function mapStateToProps(decks, ownProps) {
  const title = ownProps.navigation.getParam('title', 'Deck')
  return {
    deck: decks.find(deck => deck.title === title),
    title
  }
}

export default connect(mapStateToProps)(NewQuestionView);

