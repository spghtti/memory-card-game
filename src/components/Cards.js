import React, { useEffect } from 'react';
import fruits from '../fruitList';

const Cards = (props) => {
  // const renderCards = () => {
  //   const randKeys = generateRandKeys();
  //   const test = [0, 1, 2, 3];
  //   test.map((t, index) => (
  //     <div id={fruits[t].name} key={index}>
  //       {fruits[t].name}
  //     </div>
  //   ));
  // };

  return (
    <div>
      <div>
        {props.randKeys.map((t, index) => (
          <div id={fruits[t].name} key={index}>
            {fruits[t].name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
