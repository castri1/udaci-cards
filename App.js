import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import DecksListView from './components/DecksListView';
import DeckView from './components/DeckView';
import NewDecksView from './components/NewDecksView';
import NewQuestionView from './components/NewQuestionView';
import QuizView from './components/QuizView';
import reducer from './reducers';

import { setLocalNotification } from './utils/helpers';

export default class App extends Component {
  componentDidMount() {
    setLocalNotification()
  }

  render() {
    return (
      <Provider store={createStore(reducer)}>
        <MainNavigator />
      </Provider>
    );
  }
}

const DeckApp = createBottomTabNavigator({
  Decks: DecksListView,
  NewDecks: NewDecksView
}, 
{
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'Decks') {
        iconName = `ios-albums${focused ? '' : '-outline'}`;
      } else if (routeName === 'NewDecks') {
        iconName = `ios-add${focused ? '' : '-outline'}`;
      }
      
      return <Ionicons name={iconName} size={25} color={tintColor} />;
    }
  }),
  tabBarOptions: {
    activeTintColor: 'black',
    inactiveTintColor: 'gray',
  },
});

const MainNavigator = createStackNavigator({
  Home: DeckApp,
  DeckView: DeckView,
  NewDecksView: NewDecksView,
  NewQuestionView: NewQuestionView,
  QuizView: QuizView
});