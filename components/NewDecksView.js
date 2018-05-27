import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import AppButton from './AppButton';
import AppTextInput from './AppTextInput';

import { black, white } from '../utils/colors';

export default class NewDecksView extends Component {
  static navigationOptions = {
    title: 'New Deck',
  };

  state = {
    title: ''
  }

  onChangeText = (title) => this.setState({title})

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}> 
          <Text 
            style={styles.text}
          >What is the title of your next deck?
          </Text>
        </View>
        
        <AppTextInput
          onChangeText={this.onChangeText}
          style={styles.input} 
          placeholder='Deck Title'
        />
        
        <AppButton
          text='Submit'
          btnStyle={{ backgroundColor: black, borderColor: black, }}
          textStyle={{ color: white }}
          onPress={() => alert(this.state.title)}
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
})
