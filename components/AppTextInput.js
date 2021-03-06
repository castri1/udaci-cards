import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { black } from '../utils/colors';

export default AppTextInput = ({ style, ...props }) => (
  <TextInput
    {...props}
    style={[styles.input, style]}
  />
);

const styles = StyleSheet.create({
  input: {
    width: 330,
    height: 40, 
    borderColor: black, 
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    marginBottom: 40
  }
});

