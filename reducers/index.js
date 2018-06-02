import {
  LOAD_DECKS,
  ADD_DECK,
  LOAD_DECK,
  UPDATE_DECK
} from '../actions';

function decks (state = [], action) {
  switch (action.type) {
    case LOAD_DECKS:
      return action.decks;
    case LOAD_DECK:
      return [state.find(deck => deck.title === action.title)];
    case ADD_DECK:
      return [...state, action.deck];
    case UPDATE_DECK:
      return state.map(deck => deck.title === action.deck.title ? action.deck : deck)
    default:
      return state;
  }
}

export default decks;