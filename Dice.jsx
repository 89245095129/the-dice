import React from 'react';
import dice1 from '../assets/dice1.png';
import dice2 from '../assets/dice2.png';
import dice3 from '../assets/dice3.png';
import dice4 from '../assets/dice4.png';
import dice5 from '../assets/dice5.png';
import dice6 from '../assets/dice6.png';

function Dice({ value }) {
  const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

  return (
    <img
      src={diceImages[value - 1]}
      alt={`Выпало: ${value}`}
      className="dice-image"
      key={value}
    />
  );
}

export default Dice;
