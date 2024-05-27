import React from 'react';

const InstructionScreen = ({ showGame }) => (
  <div className="instruction-screen">
    <h2>Instructions</h2>
    <p>Match all the pairs of cards with a limited number of tries to win bananas!</p>
    <button onClick={showGame}>Next</button>
  </div>
);

export default InstructionScreen;
