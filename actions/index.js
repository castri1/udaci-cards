export const LOAD_DECKS = 'LOAD_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const LOAD_DECK = 'LOAD_DECK';
export const UPDATE_DECK = 'UPDATE_DECK';

export function loadDecks (decks) {
  return {
    type: LOAD_DECKS,
    decks
  }
}

export function loadDeck (title) {
  return {
    type: LOAD_DECK,
    title
  }
}

export function addDeck (deck) {
  return  {
    type: ADD_DECK,
    deck
  }
}

export function updateDeck (deck) {
  return {
    type: UPDATE_DECK,
    deck
  }
}