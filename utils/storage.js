import { AsyncStorage } from 'react-native';

const DECKS_KEY = 'UdaciCards:decks';

export function getDeck(deck) {
  return AsyncStorage.getItem(deck);
}

export function getDecks() {
  return AsyncStorage.getItem(DECKS_KEY)
    .then(JSON.parse)
    .then(decks => {
      if (!decks) return [];
      return Object.keys(decks).map(key => decks[key]);
    });
}

export function saveDeckTitle(deck) {
  const data = {
    [deck]: {
      title: deck,
      questions: []
    }
  }
  return AsyncStorage.mergeItem(DECKS_KEY, JSON.stringify(data));
}

export function addCardToDeck(card) {
  return AsyncStorage.mergeItem(DECKS_KEY, JSON.stringify(card));
}

export function clear() {
  return AsyncStorage.clear();
}
