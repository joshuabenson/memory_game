import React from 'react';

const RandomNumber = () => {
  function randomNumberInRange(min, max) {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <div>
      <h2>{randomNumberInRange(0, 10)}</h2>
    </div>
  );
};

export default RandomNumber;