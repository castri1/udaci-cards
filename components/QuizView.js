import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { black, white, red, green } from '../utils/colors';

class QuizView extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Quiz',
    header: ''
  });

  state = {
    displayQuestion: true,
    correct: 0,
    questions: [],
    index: 1
  }

  componentWillMount() {
    const questions = this.props.navigation.getParam('questions');
    this.setState({
      questions
    });
  }

  onPressCorrect = () => {
    this.setState((prevState) => ({
      correct: prevState.correct + 1,
      index: prevState.index + 1
    }));
  }

  onPressIncorrect = () => {
    this.setState((prevState) => ({
      index: prevState.index + 1
    }));
  }

  toggleQuestionAnswer = () => {
    this.setState((prevState) => ({
      displayQuestion: !prevState.displayQuestion
    }));
  }

  onRestartQuiz = () => {
    this.setState({
      displayQuestion: true,
      correct: 0,
      index: 1
    });
  }

  onBackToDeck = () => {
    this.props.navigation.goBack();
  }

  render() {
    const { index, questions, displayQuestion, correct } = this.state;

    //Quiz finished
    if (index > questions.length) {
      return (
        <View style={[styles.container, styles.quizContainer]}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>
              Your Score:
            </Text>
            <Text style={styles.text}>
              {Math.round(correct * 100 / questions.length)}%
            </Text>
          </View>

          <AppButton
            text='Restart Quiz'
            btnStyle={{ backgroundColor: black, borderColor: black, marginBottom: 10 }}
            textStyle={{ color: white }}
            onPress={() => this.onRestartQuiz()}
          />
          <AppButton
            text='Back To Deck'
            btnStyle={{ backgroundColor: black, borderColor: black, marginBottom: 10 }}
            textStyle={{ color: white }}
            onPress={() => this.onBackToDeck()}
          />
        </View>
      );
    }

    const { question, answer } = questions[index - 1];

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>
            {index} / {questions.length}
          </Text>
        </View>
        <View style={styles.quizContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>
              {displayQuestion ? question : answer}
            </Text>
            <Text style={styles.answerText} onPress={() => this.toggleQuestionAnswer()}>
              {displayQuestion ? 'Answer' : 'Question'}
            </Text>
          </View>

          <AppButton
            text='Correct'
            btnStyle={{ backgroundColor: green, borderColor: green, marginBottom: 10 }}
            textStyle={{ color: white }}
            onPress={this.onPressCorrect}
          />

          <AppButton
            text='Incorrect'
            btnStyle={{ backgroundColor: red, borderColor: red, }}
            textStyle={{ color: white }}
            onPress={this.onPressIncorrect}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  quizContainer: {
    alignItems: 'center',
    marginTop: 80
  },
  textContainer: {
    paddingLeft: 40,
    paddingRight: 40,
    alignItems: 'center',
    marginBottom: 40
  },
  header: {
    marginTop: 5,
    marginLeft: 5
  },
  headerText: {
    fontSize: 20
  },
  answerText: {
    color: red
  },
  text: {
    fontSize: 40,
    color: black,
    textAlign: 'center'
  }
});

export default QuizView;