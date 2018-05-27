import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import AppButton from './AppButton';
import AppTextInput from './AppTextInput';
import { black, white } from '../utils/colors';

export default class NewQuestionView extends Component {
  state = {
    question: '',
    answer: ''
  }

  onChangeText = (input, value) => {
    this.setState({
      [input]: value
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <AppTextInput 
          placeholder='Question'
          onChangeText={(question) => this.onChangeText('question', question)}
        />
        <AppTextInput 
          placeholder='Answer'
          onChangeText={(answer) => this.onChangeText('answer', answer)}
        />
        <AppButton 
          text='Submit'
          btnStyle={{ backgroundColor: black }}
          textStyle={{ color: white }}
          onPress={() => alert(this.state.answer)}
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
