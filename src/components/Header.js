import React from 'react';

const Header = (props) => {
  return (
    <div>
      <div>Score: {props.currentScore}</div>
      <div>High score: {props.highScore}</div>
    </div>
  );
};

export default Header;
