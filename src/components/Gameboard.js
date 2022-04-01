/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import Cards from './Cards';
import fruits from '../fruitList';

const Gameboard = (props) => {
  const [selectedCards, setSelectedCards] = useState([]);
  const [randKeys, setRandKeys] = useState([]);
  const [hasWon, setHasWon] = useState(false);

  useEffect(() => {
    generateRandKeys();
  }, [selectedCards]);

  useEffect(() => {
    const updateHighScore = () => {
      if (props.currentScore >= props.highScore) {
        props.setHighScore(props.currentScore);
      }
      sessionStorage.setItem('highScore', `${props.highScore}`);
    };

    updateHighScore();
  }, [props, props.currentScore]);

  useEffect(() => {
    checkForWin();
  });

  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const checkArrays = (value, arrayOne, arrayTwo) =>
    arrayOne.indexOf(value) !== -1 || arrayTwo.indexOf(value) !== -1
      ? true
      : false;

  const chooseCard = (e) => {
    const array = [...selectedCards];
    array.push(e.target.id);
    console.log(array);
    setSelectedCards(array);
  };

  const checkForPoint = (e) => {
    const fruit = e.target.id;
    if (selectedCards.indexOf(fruit) === -1) {
      props.setCurrentScore(props.currentScore + 1);
    } else {
      props.setCurrentScore(0);
      setSelectedCards([]);
    }
  };

  const checkForWin = () => {
    if (selectedCards.length === fruits.length) {
      setHasWon(true);
    }
  };

  const getIndexOfObjectArray = (array, key) => {
    for (let i = 0; i < array.length; i++) {
      if (array[i].name === key) return i;
    }
    return -1;
  };

  const addExistingChoice = () => {
    const randInt = randomNumber(0, selectedCards.length - 1);
    return getIndexOfObjectArray(fruits, selectedCards[randInt]);
  };

  const addUnselectedChoice = () => {
    let randInt = randomNumber(0, fruits.length - 1);

    while (getIndexOfObjectArray(fruits, selectedCards[randInt]) !== -1) {
      randInt = randomNumber(0, fruits.length - 1);
    }
    return randInt;
  };

  const generateRandKeys = () => {
    const cardCount = 6;
    const randKeys = [];
    for (let i = 0; i < cardCount; i++) {
      let randInt = randomNumber(0, fruits.length - 1);
      while (checkArrays(randInt, randKeys, selectedCards)) {
        randInt = randomNumber(1, fruits.length - 1);
      }
      randKeys.push(randInt);
    }
    if (selectedCards.length > 0) {
      const existingChoice = addExistingChoice();
      if (randKeys.indexOf(existingChoice) === -1) {
        randKeys[randomNumber(0, randKeys.length)] = existingChoice;
      }
    }
    if (selectedCards.length < fruits.length) {
      const newChoice = addUnselectedChoice();
      if (randKeys.indexOf(newChoice) === -1) {
        randKeys[randomNumber(0, randKeys.length)] = newChoice;
      }
    }
    setRandKeys(randKeys);
  };

  const resetGame = () => {
    props.setCurrentScore(0);
    setSelectedCards([]);
    setHasWon(false);
  };

  const handleClick = (e) => {
    chooseCard(e);
    checkForPoint(e);
    generateRandKeys();
    checkForWin();
  };

  if (!hasWon) {
    return (
      <div>
        <Cards
          chooseCard={chooseCard}
          checkArrays={checkArrays}
          randomNumber={randomNumber}
          handleClick={handleClick}
          randKeys={randKeys}
        />
      </div>
    );
  }
  return (
    <div>
      <div>You won</div>
      <button onClick={resetGame}>Restart</button>
    </div>
  );
};

export default Gameboard;
