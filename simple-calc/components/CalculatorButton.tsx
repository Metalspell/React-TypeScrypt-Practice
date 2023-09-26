import React from 'react'
import { CalculatorButtonProps } from '@/interfaces';

const CalculatorButton = ({ value, onClick }: CalculatorButtonProps) => {
  return (
    <button
      className="p-2 text-white bg-blue-500 rounded"
      onClick={() => onClick()}
    >
      {value}
    </button>
  );
}

export default CalculatorButton