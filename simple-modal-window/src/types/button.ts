export interface ButtonState {
  click: boolean;
}

export enum ButtonActionTypes {
  BUTTON_CLICK = 'BUTTON_CLICK',
}

interface ClickButtonAction {
  type: ButtonActionTypes.BUTTON_CLICK;
  payload: boolean;
}

export type ButtonAction = ClickButtonAction