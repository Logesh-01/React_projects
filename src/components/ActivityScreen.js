import React, { useState, useEffect } from 'react';
import Card from './Card';

const ActivityScreen = ({ data, endGame }) => {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [tries, setTries] = useState(0);
  const [bananas, setBananas] = useState(0);

  useEffect(() => {
    setCards(shuffle(data));
  }, [data]);

  const handleCardClick = (index) => {
    if (flipped.length === 1) {
      setTries(tries + 1);
      if (cards[flipped[0]].id === cards[index].id) {
        setMatched([...matched, flipped[0], index]);
        setBananas(bananas + 1);
      }
      setFlipped([]);
    } else {
      setFlipped([index]);
    }

    if (matched.length === cards.length - 2) {
      endGame();
    }
  };

  return (
    <div className="activity-screen">
      <div className="cards-grid">
        {cards.map((card, index) => (
          <Card
            key={index}
            item={card}
            index={index}
            isFlipped={flipped.includes(index) || matched.includes(index)}
            onClick={handleCardClick}
          />
        ))}
      </div>
      <div className="status">
        <p>Tries: {tries}</p>
        <p>Bananas: {bananas}</p>
      </div>
    </div>
  );
};

const shuffle = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

export default ActivityScreen;
