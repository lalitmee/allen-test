import { useState } from "react";

const cardIcons = {
  diamonds: "♦",
  clubs: "♣",
  hearts: "♥",
  spades: "♠",
};

const deckCards = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "K", "Q", "J"];

const cardTypes = ["diamonds", "clubs", "hearts", "spades"];

const cardColor = {
  hearts: "red",
  diamonds: "red",
  clubs: "black",
  spades: "black",
};

const deck = {
  diamonds: deckCards,
  clubs: deckCards,
  hearts: deckCards,
  spades: deckCards,
};

const getRandomNumber = (len = 14) => {
  return Math.floor(Math.random() * len);
};

const cardDimension = "w-[18%] h-36";

const removeCardFromDeck = (deck, card) => {
  const modifiedDeck = { ...deck };
  const { type, card: text } = card;
  const index = deck[type].findIndex((cardText) => cardText === text);
  if (index !== -1) {
    modifiedDeck[type].splice(index, 1);
    modifiedDeck[type] = [...modifiedDeck[type]];
  }

  return modifiedDeck;
};

function App() {
  const [cardDeck, setCardDeck] = useState(deck);
  const [cardTable, setCardTable] = useState([]);

  const handleDrawCard = () => {
    let deckOfCards = { ...cardDeck };
    const drawnCards = [];
    let it = 0;
    while (drawnCards.length < 5) {
      const cardType = cardTypes[getRandomNumber(4)];
      const card = deckCards[getRandomNumber(13)];

      if (deckOfCards[cardType].includes(card)) {
        drawnCards.push({
          type: cardType,
          icon: cardIcons[cardType],
          color: cardColor[cardType],
          card,
        });

        deckOfCards = removeCardFromDeck(deckOfCards, { type: cardType, card });
      }

      // const matchedCard = drawnCards.some(
      //   (card) => card.card === card && card.type === cardType,
      // );

      // const matchedTableCard = cardTable.some(
      //   (card) => card.card === card && card.type === cardType,
      // );

      // console.log({ matchedCard, matchedTableCard });

      // if (!matchedCard && !matchedTableCard) {
      // }
      it++;
      if (it > 1000) {
        console.log("something");
        break;
      }
      console.log(it);
    }

    setCardDeck(deckOfCards);
    setCardTable((prev) => [...drawnCards, ...prev]);
  };

  return (
    <div className="w-full m-4">
      <button
        className={`border rounded-lg font-bold px-4 py-2 bg-gray-400 text-black ${cardDimension}`}
        onClick={handleDrawCard}
      >
        Draw card
      </button>

      <div className="text-red-500"></div>
      <div className="text-black-500"></div>

      <div className="mt-4 flex justify-evenly items-center flex-wrap gap-2">
        {cardTable.map((card) => (
          <div
            key={card}
            className={`relative border border-s-gray-300 rounded flex justify-center items-center ${cardDimension}`}
          >
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-2xl">
              {card.icon}
            </div>
            <div
              className={`absolute top-1 left-2 text-xl font-bold text-${card.color}-500`}
            >
              {card.card}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
