import { UserAction, UserActionTypes, UserState } from "../../types/user";

const initialState: UserState = {
  users: [],
}

export const userReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionTypes.GET_USERS_LIST:
      return {users: action.payload }
    default:
      return state
  }
}