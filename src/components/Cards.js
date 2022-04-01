import React, { useEffect } from 'react';
import fruits from '../fruitList';

const Cards = (props) => {
  return (
    <div>
      <div>
        {props.randKeys.map((t, index) => (
          <div id={fruits[t].name} key={index} onClick={props.handleClick}>
            {fruits[t].title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
