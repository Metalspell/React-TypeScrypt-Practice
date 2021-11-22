export interface UserState {
  users: any[];
}

export enum UserActionTypes {
  GET_USERS_LIST = 'GET_USERS_LIST',
}

interface FetchUsersSuccessAction {
  type: UserActionTypes.GET_USERS_LIST;
  payload: any[]
}

export type UserAction = FetchUsersSuccessAction