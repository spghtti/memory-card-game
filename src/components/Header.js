import React from 'react';

const Header = (props) => {
  return (
    <div>
      <h1 className="title">Memory game</h1>
      <div className="scoreboard">
        <div>Score: {props.currentScore}</div>
        <div>High score: {props.highScore}</div>
      </div>
    </div>
  );
};

export default Header;
