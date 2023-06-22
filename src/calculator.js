import React, { useState } from 'react';
import App from './App';

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');
  const [selectedColor, setSelectedColor] = useState('black');

  const handleNum1Change = (event) => {
    setNum1(event.target.value);
  };

  const handleNum2Change = (event) => {
    setNum2(event.target.value);
  };

  const handleAddition = () => {
    const sum = parseFloat(num1) + parseFloat(num2);
    setResult(sum);
  };

  const handleSubtraction = () => {
    const difference = parseFloat(num1) - parseFloat(num2);
    setResult(difference);
  };

  const handleMultiplication = () => {
    const product = parseFloat(num1) * parseFloat(num2);
    setResult(product);
  };

  const handleDivision = () => {
    const quotient = parseFloat(num1) / parseFloat(num2);
    setResult(quotient);
  };

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  const textStyle = {
    color: selectedColor,
  };

  return (
    <div>
      <input type="number" value={num1} onChange={handleNum1Change} />
      <input type="number" value={num2} onChange={handleNum2Change} />
      <button onClick={handleAddition}>+</button>
      <button onClick={handleSubtraction}>-</button>
      <button onClick={handleMultiplication}>*</button>
      <button onClick={handleDivision}>/</button>

      <div>
        <label htmlFor="colorSelect">Выберите цвет: </label>
        <select id="colorSelect" value={selectedColor} onChange={handleColorChange}>
          <option value="black">Черный</option>
          <option value="red">Красный</option>
          <option value="green">Зеленый</option>
          <option value="blue">Синий</option>
        </select>
      </div>

      <div style={textStyle}>Результат: {result}</div>
    </div>
  );
}

export default Calculator;
