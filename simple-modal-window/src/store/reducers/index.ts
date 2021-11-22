import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { buttonReducer } from './buttonReducer'


export const rootReducer = combineReducers({
  user: userReducer,
  click: buttonReducer,
})

export type RootState = ReturnType<typeof rootReducer>