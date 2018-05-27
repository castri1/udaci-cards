import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { white, black } from '../utils/colors';


export default AppButton = ({ text, btnStyle, textStyle, onPress }) => (
  <TouchableOpacity style={[styles.button, btnStyle]} onPress={onPress}>
    <View>
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    borderWidth: 1,
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: black
  }
});