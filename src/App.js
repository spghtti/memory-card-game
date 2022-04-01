import './App.css';
import Gameboard from './components/Gameboard';
import Header from './components/Header';
import React, { useState } from 'react';

function App() {
  const [currentScore, setCurrentScore] = useState(0);

  const getSessionStorage = (key, defaultValue) => {
    const highScore = Number(sessionStorage.getItem(key));
    if (!highScore) {
      return defaultValue;
    } else {
      return highScore;
    }
  };

  const [highScore, setHighScore] = useState(getSessionStorage('highScore', 0));

  return (
    <div className="App">
      <header className="App-header">
        <Header
          currentScore={currentScore}
          setCurrentScore={setCurrentScore}
          highScore={highScore}
          setHighScore={setHighScore}
        />
      </header>
      <Gameboard
        currentScore={currentScore}
        setCurrentScore={setCurrentScore}
        highScore={highScore}
        setHighScore={setHighScore}
      />
    </div>
  );
}

export default App;
