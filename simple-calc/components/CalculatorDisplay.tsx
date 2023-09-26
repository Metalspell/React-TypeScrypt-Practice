import React from 'react'
import { CalculatorDisplayProps } from '@/interfaces';

const CalculatorDisplay = ({ value, operator }: CalculatorDisplayProps) => {
  const operatorSymbol = {
    '+': '+', 
    '-': '-',
    '*': '×',
    '/': '÷',
  }[operator || ''];
  return (
    <div className="p-2 text-xl font-bold text-right text-black bg-white border rounded">
      {value}
      {operatorSymbol && <span>{operatorSymbol}</span>}
    </div>
  );
}

export default CalculatorDisplay