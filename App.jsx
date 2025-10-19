import React, { useState } from 'react';
import Dice from './components/Dice';
import './App.css';

function App() {
  const [diceValue, setDiceValue] = useState(1);
  const [isRolling, setIsRolling] = useState(false);

  const rollDice = () => {
    if (isRolling) return;
    
    setIsRolling(true);
    
    // Имитация анимации броска
    setTimeout(() => {
      const newValue = Math.floor(Math.random() * 6) + 1;
      setDiceValue(newValue);
      setIsRolling(false);
    }, 500);
  };

  return (
    <div className="container">
      <h1>🎲 Игральная кость 🎲</h1>
      <Dice value={diceValue} />
      <button 
        className={`roll-button ${isRolling ? 'rolling' : ''}`}
        onClick={rollDice}
        disabled={isRolling}
      >
        {isRolling ? 'Бросаем...' : 'Бросить кубик'}
      </button>
    </div>
  );
}

export default App;
