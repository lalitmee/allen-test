import { useState } from "react";

import { getRandomNumber, removeCardFromDeck } from "./utils";
import { CARD_ICONS, CARDS, CARD_COLOR, DECK, CARD_TYPES } from "./constants";

const cardDimension = "h-60";

function App() {
  const [cardDeck, setCardDeck] = useState(DECK);
  const [cardTable, setCardTable] = useState([]);

  const handleDrawCard = () => {
    let deckOfCards = { ...cardDeck };
    const drawnCards = [];
    if (cardTable.length === 52) {
      alert("All cards are already on the table");
      return;
    }

    if (cardTable.length < 50) {
      while (drawnCards.length < 5) {
        const cardType = Object.values(CARD_TYPES)[getRandomNumber(4)];
        const card = CARDS[getRandomNumber(13)];

        console.log({ card, cardType });

        if (deckOfCards[cardType].includes(card)) {
          drawnCards.push({
            type: cardType,
            icon: CARD_ICONS[cardType],
            color: CARD_COLOR[cardType],
            card,
          });

          deckOfCards = removeCardFromDeck(deckOfCards, {
            type: cardType,
            card,
          });
        }
      }
    } else {
      Object.keys(deckOfCards).forEach((type) => {
        if (deckOfCards[type].length) {
          deckOfCards[type].forEach((card) => {
            drawnCards.push({
              type,
              icon: CARD_ICONS[type],
              color: CARD_COLOR[type],
              card,
            });
          });
        }
      });
    }

    setCardDeck(deckOfCards);
    setCardTable((prev) => [...drawnCards, ...prev]);
  };

  return (
    <div className="md:w-full lg:w-10/12 xl:w-8/12 2xl:w-7/12 mx-auto m-4 p-4">
      <div className="flex flex-col md:flex-row items-center gap-4 justify-center md:justify-between">
        <button
          className="border rounded-md font-bold px-4 py-2 border-gray-400 text-black 2xl:w-[22%] xl:w-[24%] lg:w-[33%] md:w-[50%] sm:w-[50%] w-full hover:bg-slate-200 transition-all delay-100"
          onClick={handleDrawCard}
        >
          Draw card
        </button>
        <div className="text-2xl">
          Cards on the Table: <b>{cardTable.length}</b>
        </div>
      </div>

      <div className="text-red-500"></div>
      <div className="text-black-500"></div>

      <div className="mt-4 grid grid-flow-row 2xl:grid-cols-[repeat(5,minmax(200px,_1fr))] xl:grid-cols-[repeat(4,minmax(200px,_1fr))] lg:grid-cols-[repeat(3,minmax(200px,_1fr))] sm:grid-cols-[repeat(2,minmax(200px,_1fr))] gap-2">
        {cardTable.map((card) => (
          <div
            key={`${card.card}-${card.type}`}
            className={`relative border-4 border-gray-300 rounded-xl flex justify-center items-center ${cardDimension}`}
          >
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-4xl">
              {card.icon}
            </div>
            <div
              className={`absolute top-1 left-2 text-4xl font-bold text-${card.color}-500`}
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
