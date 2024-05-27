import React from 'react';
import './index.css'
const IntroScreen = ({ startGame }) => (
  <div className="intro-screen">
    <h1>Welcome to the Matching Game!</h1>
    <button onClick={startGame}>Start</button>
  </div>
);

export default IntroScreen;
