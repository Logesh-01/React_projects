import React from 'react';

const Card = ({ item, index, isFlipped, onClick }) => (
  <div className="card" onClick={() => onClick(index)}>
    {isFlipped ? item.content : '❓'}
  </div>
);

export default Card;
