import React from 'react';

const FinalScreen = ({ tries, bananas }) => (
  <div className="final-screen">
    <h2>Game Over!</h2>
    <p>You completed the game in {tries} tries.</p>
    <p>You collected {bananas} bananas!</p>
  </div>
);

export default FinalScreen;
