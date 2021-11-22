import { UserAction, UserActionTypes } from "../../types/user";
import { Dispatch } from "redux";
import data from '../../data/users'

export const getUsers = () => {
  return (dispatch: Dispatch<UserAction>) => {
    dispatch({ type: UserActionTypes.GET_USERS_LIST, payload: data })
  }
}

export const removeUsers = () => {
  return (dispatch: Dispatch<UserAction>) => {
    dispatch({ type: UserActionTypes.GET_USERS_LIST, payload: [] })
  }
}