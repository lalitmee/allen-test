export const CARDS = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "K", "Q", "J"];

export const CARD_TYPES = {
  DIAMONDS: "diamonds",
  CLUBS: "clubs",
  HEARTS: "hearts",
  SPADES: "spades",
};

export const CARD_COLOR = {
  [CARD_TYPES.DIAMONDS]: "red",
  [CARD_TYPES.CLUBS]: "black",
  [CARD_TYPES.HEARTS]: "red",
  [CARD_TYPES.SPADES]: "black",
};

export const CARD_ICONS = {
  [CARD_TYPES.DIAMONDS]: "♦",
  [CARD_TYPES.CLUBS]: "♣",
  [CARD_TYPES.HEARTS]: "♥",
  [CARD_TYPES.SPADES]: "♠",
};

export const DECK = {
  [CARD_TYPES.CLUBS]: [...CARDS],
  [CARD_TYPES.DIAMONDS]: [...CARDS],
  [CARD_TYPES.HEARTS]: [...CARDS],
  [CARD_TYPES.SPADES]: [...CARDS],
};
