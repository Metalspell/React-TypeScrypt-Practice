export interface CalculatorState {
  displayValue: string;
  operator: string | null;
  firstValue: string | null;
  waitingForSecondValue: boolean;
}

export interface CalculatorDisplayProps {
  value: string;
  operator?: string;
}

export interface CalculatorButtonProps {
  value: string;
  onClick: () => void;
};