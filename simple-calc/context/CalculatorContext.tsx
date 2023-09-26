"use client"
import React, { createContext, useContext, useReducer, Dispatch } from 'react';
import { CalculatorState } from '@/interfaces';

type CalculatorAction =
  | { type: 'SET_DISPLAY_VALUE'; payload: string }
  | { type: 'SET_OPERATOR'; payload: string }
  | { type: 'CLEAR' }
  | { type: 'BACKSPACE' }
  | { type: 'CALCULATE' };

type CalculatorContextType = {
  state: CalculatorState;
  dispatch: Dispatch<CalculatorAction>;
};

const CalculatorContext = createContext<CalculatorContextType | undefined>(
  undefined
);

const initialState: CalculatorState = {
  displayValue: '0',
  operator: null,
  firstValue: null,
  waitingForSecondValue: false,
};

const calculatorReducer = (
  state: CalculatorState,
  action: CalculatorAction
): CalculatorState => {
  switch (action.type) {
    case 'SET_DISPLAY_VALUE':
      return { ...state, displayValue: action.payload };
    case 'SET_OPERATOR':
      return {
        ...state,
        operator: action.payload,
        firstValue: state.displayValue,
        waitingForSecondValue: true,
      };
    case 'CLEAR':
      return initialState;
    case 'BACKSPACE':
      return {
        ...state,
        displayValue: state.displayValue.slice(0, -1),
      };
    case 'CALCULATE':
      const secondValue = state.displayValue;
      const { firstValue, operator } = state;
      let result;

      switch (operator) {
        case '+':
          result = parseFloat(firstValue || '0') + parseFloat(secondValue);
          break;
        case '-':
          result = parseFloat(firstValue || '0') - parseFloat(secondValue);
          break;
        case '*':
          result = parseFloat(firstValue || '0') * parseFloat(secondValue);
          break;
        case '/':
          result = parseFloat(firstValue || '0') / parseFloat(secondValue);
          break;
        default:
          result = parseFloat(secondValue);
      }

      return {
        ...state,
        displayValue: result.toString(),
        operator: null,
        firstValue: null,
        waitingForSecondValue: false,
      };
    default:
      return state;
  }
};

export const CalculatorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(calculatorReducer, initialState);

  return (
    <CalculatorContext.Provider value={{ state, dispatch }}>
      {children}
    </CalculatorContext.Provider>
  );
};

export const useCalculator = (): CalculatorContextType => {
  const context = useContext(CalculatorContext);
  if (!context) {
    throw new Error(
      'useCalculator must be used within a CalculatorProvider'
    );
  }
  return context;
};