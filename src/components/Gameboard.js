/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import Cards from './Cards';
import fruits from '../fruitList';

const Gameboard = (props) => {
  const [selectedCards, setSelectedCards] = useState([]);
  const [randKeys, setRandKeys] = useState([]);

  useEffect(() => {
    generateRandKeys();
  }, []);

  useEffect(() => {
    const updateHighScore = () => {
      if (props.currentScore >= props.highScore) {
        props.setHighScore(props.currentScore);
      }
      sessionStorage.setItem('highScore', `${props.highScore}`);
    };

    updateHighScore();
  }, [props, props.currentScore]);

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
    setSelectedCards(array);
  };

  const checkForPoint = (e) => {
    const fruit = e.target.id;
    if (selectedCards.indexOf(fruit) === -1) {
      props.setCurrentScore(props.currentScore + 1);
    } else {
      props.setCurrentScore(0);
    }
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
    setRandKeys(randKeys);
  };

  const handleClick = (e) => {
    chooseCard(e);
    checkForPoint(e);
    generateRandKeys();
  };

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
};

export default Gameboard;
