import React, { useEffect } from 'react';

const Header = (props) => {
  // useEffect(() => {
  //   /* eslint-disable react-hooks/exhaustive-deps */
  //   const prevHighScore = Number(sessionStorage.getItem('highScore'));
  //   console.log(prevHighScore);
  //   props.setHighScore(prevHighScore);
  // }, [props, props.highScore]);

  return (
    <div>
      <div>Score: {props.currentScore}</div>
      <div>High score: {props.highScore}</div>
    </div>
  );
};

export default Header;
