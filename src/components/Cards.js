import React from 'react';
import fruits from '../fruitList';

const importAll = (r) => {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
};

const images = importAll(
  require.context('../images', false, /\.(png|jpe?g|svg)$/)
);

const Cards = (props) => {
  return (
    <div className="game-area">
      {props.randKeys.map((t, index) => (
        <div
          data-index={fruits[t].name}
          key={index}
          onClick={props.handleClick}
          className="card"
        >
          <div className="card-image" data-index={fruits[t].name}>
            <img
              data-index={fruits[t].name}
              src={images[`${fruits[t].name}.jpg`]}
              alt=""
            />
          </div>
          <div className="card-title" data-index={fruits[t].name}>
            {fruits[t].title}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
