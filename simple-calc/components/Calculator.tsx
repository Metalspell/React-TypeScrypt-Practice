"use client"
import { useCalculator } from '@/context/CalculatorContext';
import React from 'react'
import CalculatorDisplay from './CalculatorDisplay';
import CalculatorButton from './CalculatorButton';

const Calculator = () => {
  const { state, dispatch } = useCalculator();

  const handleButtonClick = (value: string) => {
    if (value === '=') {
      dispatch({ type: 'CALCULATE' });
    } else if (value === 'C') {
      dispatch({ type: 'CLEAR' });
    } else if (value === '←') { 
      dispatch({ type: 'BACKSPACE' });
    } else if (['+', '-', '*', '/'].includes(value)) {
      dispatch({ type: 'SET_OPERATOR', payload: value });
    } else {
      if (state.displayValue === '0' || state.waitingForSecondValue) {
        dispatch({ type: 'SET_DISPLAY_VALUE', payload: value });
      } else {
        dispatch({
          type: 'SET_DISPLAY_VALUE',
          payload: state.displayValue + value,
        });
      }
    }
  };

  return (
    <div className="w-64 p-4 mx-auto bg-gray-200 rounded-lg shadow-md">
      <CalculatorDisplay value={state.displayValue} />
      <div className="grid grid-cols-4 gap-2 mt-4">
        {['7', '8', '9', '/'].map((value) => (
          <CalculatorButton
            key={value}
            onClick={() => handleButtonClick(value)}
            value={value}
          />
        ))}
        {['4', '5', '6', '*'].map((value) => (
          <CalculatorButton
            key={value}
            onClick={() => handleButtonClick(value)}
            value={value}
          />
        ))}
        {['1', '2', '3', '-'].map((value) => (
          <CalculatorButton
            key={value}
            onClick={() => handleButtonClick(value)}
            value={value}
          />
        ))}
        {['0', '.', '=', '+', 'C', '←'].map((value) => (
          <CalculatorButton
            key={value}
            onClick={() => handleButtonClick(value)}
            value={value}
          />
        ))}
      </div>
    </div>
  );
}

export default Calculator