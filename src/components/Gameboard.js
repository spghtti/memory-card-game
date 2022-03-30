import React, { useState } from 'react';
import Cards from './Cards';
import fruits from '../fruitList';

const Gameboard = () => {
  const [selectedCards, setSelectedCards] = useState([]);
  const [randKeys, setRandKeys] = useState([]);

  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const checkArrays = (value, arrayOne, arrayTwo) =>
    arrayOne.indexOf(value) !== -1 || arrayTwo.indexOf(value) !== -1
      ? true
      : false;

  const generateRandKeys = () => {
    const cardCount = 5;
    const randKeys = [];
    for (let i = 0; i < cardCount; i++) {
      let randInt = randomNumber(0, fruits.length - 1);
      while (checkArrays(randInt, randKeys, selectedCards)) {
        randInt = randomNumber(1, fruits.length);
      }
      randKeys.push(randInt);
    }
    setRandKeys(randKeys);
    console.log(randKeys);
  };

  const chooseCard = (e) => {
    const array = [...selectedCards];
    array.push(e.target.id);
    setSelectedCards(array);
    // console.log(selectedCards);
  };

  return (
    <div>
      <Cards chooseCard={chooseCard} randKeys={randKeys} />
      <button onClick={generateRandKeys}>Generate random</button>
    </div>
  );
};

export default Gameboard;
