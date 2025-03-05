import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [display, setDisplay] = useState('');
  const MAX_DISPLAY_LENGTH = 15; 
  const handleButtonClick = (value) => {
    setDisplay((prevDisplay) => {
      if (prevDisplay.length < MAX_DISPLAY_LENGTH) {
        return prevDisplay + value;
      }
      return prevDisplay; 
    });
  };

  const handleClear = () => {
    setDisplay('');
  };

  const handleCalculate = () => {
    try {
      const result = String(eval(display));
      if (result.length > MAX_DISPLAY_LENGTH) {
        setDisplay("Error");
      } else {
        setDisplay(result);
      }

    } catch (error) {
      setDisplay('Error');
    }
  };

  return (
    <div className="calculator">
  <div className="display">{display}</div>
  <div className="buttons">
    <button className="number" onClick={() => handleButtonClick('1')}>1</button>
    <button className="number" onClick={() => handleButtonClick('2')}>2</button>
    <button className="number" onClick={() => handleButtonClick('3')}>3</button>
    <button className="operator" onClick={() => handleButtonClick('+')}>+</button>
    <button className="number" onClick={() => handleButtonClick('4')}>4</button>
    <button className="number" onClick={() => handleButtonClick('5')}>5</button>
    <button className="number" onClick={() => handleButtonClick('6')}>6</button>
    <button className="operator" onClick={() => handleButtonClick('-')}>-</button>
    <button className="number" onClick={() => handleButtonClick('7')}>7</button>
    <button className="number" onClick={() => handleButtonClick('8')}>8</button>
    <button className="number" onClick={() => handleButtonClick('9')}>9</button>
    <button className="operator" onClick={() => handleButtonClick('*')}>*</button>
    <button className="clear" onClick={handleClear}>C</button>
    <button className="number" onClick={() => handleButtonClick('0')}>0</button>
    <button className="calculate" onClick={handleCalculate}>=</button>
    <button className="operator" onClick={() => handleButtonClick('/')}>/</button>
  </div>
</div>
  );
}

export default Calculator;