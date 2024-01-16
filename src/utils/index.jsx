export const getRandomNumber = (len = 14) => {
  return Math.floor(Math.random() * len);
};

export const removeCardFromDeck = (deck, card) => {
  const modifiedDeck = { ...deck };
  const { type, card: text } = card;
  const index = deck[type].findIndex((cardText) => cardText === text);
  if (index !== -1) {
    modifiedDeck[type].splice(index, 1);
    modifiedDeck[type] = [...modifiedDeck[type]];
  }

  return modifiedDeck;
};
