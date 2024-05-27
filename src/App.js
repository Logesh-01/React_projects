import React, { useState } from 'react';
import IntroScreen from './components/IntroScreen';
import InstructionScreen from './components/InstructionScreen';
import ActivityScreen from './components/ActivityScreen';
import FinalScreen from './components/FinalScreen';
import Header from './components/Header';
import Footer from './components/Footer';
import data from './data.json';
import './App.css';

const App = () => {
  const [screen, setScreen] = useState('intro');
  const [tries, setTries] = useState(0);
  const [bananas, setBananas] = useState(0);

  const startGame = () => setScreen('instructions');
  const showGame = () => setScreen('activity');
  const endGame = () => setScreen('final');

  return (
    <div className="app">
      <Header />
      {screen === 'intro' && <IntroScreen startGame={startGame} />}
      {screen === 'instructions' && <InstructionScreen showGame={showGame} />}
      {screen === 'activity' && (
        <ActivityScreen
          data={data}
          endGame={() => {
            setTries(tries + 1);
            setScreen('final');
          }}
        />
      )}
      {screen === 'final' && <FinalScreen tries={tries} bananas={bananas} />}
      <Footer />
    </div>
  );
};

export default App;
