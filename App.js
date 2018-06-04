import React, { Component } from 'react';
import { createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Platform, StatusBar } from 'react-native';

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

const DeckApp = createMaterialTopTabNavigator({
  Decks: DecksListView,
  NewDecks: NewDecksView
}, {
  tabBarOptions: {
    tabStyle: {
      marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
    }
  }
});

const MainNavigator = createStackNavigator({
  Home: DeckApp,
  DeckView: DeckView,
  NewDecksView: NewDecksView,
  NewQuestionView: NewQuestionView,
  QuizView: QuizView
}, {
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#000'
      },
      headerTintColor: "#fff",
      header: null
    },
  });