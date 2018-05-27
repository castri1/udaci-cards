import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import AppButton from './AppButton';
import { white, black, gray } from '../utils/colors';


export default class Deck extends Component {
  
  render() {
    const { name, numberOfCards } = this.props;
    
    return (
      <View style={styles.container}>
        <View style={{alignItems: 'center', marginBottom: 150}}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.cards}>{numberOfCards || 0 } cards</Text>
        </View>
        <View style={{alignItems: 'center', justifyContent: 'space-between', height: 110}}>
          <AppButton 
            text='Add Card' 
            onPress={() => alert("Hello")}
          >
          </AppButton>
          <AppButton 
            text='Start Quiz!' 
            onPress={() => alert("Hello")} 
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
})
