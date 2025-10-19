import React from 'react';

function Dice({ value }) {
  const diceImages = [
    require('../assets/dice1.png'),
    require('../assets/dice2.png'),
    require('../assets/dice3.png'),
    require('../assets/dice4.png'),
    require('../assets/dice5.png'),
    require('../assets/dice6.png'),
  ];

  return (
    <img
      src={diceImages[value - 1]}
      alt={`Выпало: ${value}`}
      className="dice-image"
      key={value} // Добавляем ключ для принудительной перерисовки
    />
  );
}

export default Dice;
