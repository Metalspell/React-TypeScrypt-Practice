export interface PostState {
  posts: any[];
  loading: boolean;
  error: null | string;
}
export enum PostActionTypes {
  FETCH_POST = 'FETCH_POST',
  FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS',
  FETCH_POST_ERROR = 'FETCH_POST_FETCH_POST_ERROR',
}
interface FetchPostAction {
  type:PostActionTypes.FETCH_POST;
}
interface FetchPostSuccessAction {
  type: PostActionTypes.FETCH_POST_SUCCESS;
  payload: any[]
}
interface FetchPostErrorAction {
  type: PostActionTypes.FETCH_POST_ERROR;
  payload: string;
}

export type PostAction = FetchPostAction | FetchPostErrorAction | FetchPostSuccessAction;