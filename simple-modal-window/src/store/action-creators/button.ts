import { ButtonAction, ButtonActionTypes } from "../../types/button";
import { Dispatch } from "redux";

export const getClick = () => {
  return (dispatch: Dispatch<ButtonAction>) => {
    dispatch({ type: ButtonActionTypes.BUTTON_CLICK, payload: true })
  }
}

export const getInitialState = () => {
  return (dispatch: Dispatch<ButtonAction>) => {
    dispatch({ type: ButtonActionTypes.BUTTON_CLICK, payload: false })
  }
}