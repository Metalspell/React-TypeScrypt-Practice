import { ButtonAction, ButtonActionTypes, ButtonState } from "../../types/button";

const initialState: ButtonState = {
  click: false,
}

export const buttonReducer = (state = initialState, action: ButtonAction): ButtonState => {
  switch (action.type) {
    case ButtonActionTypes.BUTTON_CLICK:
      return {click: action.payload }
    default:
      return state
  }
}