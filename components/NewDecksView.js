import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import AppButton from './AppButton';
import AppTextInput from './AppTextInput';
import { saveDeckTitle } from '../utils/storage';
import { black, white } from '../utils/colors';
import { addDeck, loadDecks } from '../actions';
import { getDecks } from '../utils/storage'

class NewDecksView extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'New Deck'
  });

  state = {
    title: ''
  }

  onChangeText = (title) => this.setState({ title })

  onPress = () => {
    const { title } = this.state;
    if (!title) {
      alert('Please type a deck name');
      return;
    }

    const { dispatch } = this.props;

    saveDeckTitle(title)
      .then(() => {
        dispatch(addDeck({
          title,
          questions: []
        }));
        this.props.navigation.navigate('Decks');
        this.setState({ title: '' });
      })
      .catch(err => {
        console.error(err);
        alert("Unable to save your deck");
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            What is the title of your next deck?
          </Text>
        </View>

        <AppTextInput
          value={this.state.title}
          onChangeText={this.onChangeText}
          style={styles.input}
          placeholder='Deck Title'
        />

        <AppButton
          text='Submit'
          btnStyle={{ backgroundColor: black, borderColor: black, }}
          textStyle={{ color: white }}
          onPress={this.onPress}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 80
  },
  textContainer: {
    paddingLeft: 40,
    paddingRight: 40,
    alignItems: 'center',
    marginBottom: 40
  },
  text: {
    fontSize: 40,
    color: '#000',
  }
});

export default connect(null)(NewDecksView);
