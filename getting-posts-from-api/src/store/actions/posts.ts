import { PostAction, PostActionTypes } from "../../types/posts";
import { Dispatch } from "redux";
import axios from "axios";

export const fetchUsers = () => {
  return async (dispatch: Dispatch<PostAction>) => {
    try {
      dispatch({ type: PostActionTypes.FETCH_POST })
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setTimeout(() => {
        dispatch({ type: PostActionTypes.FETCH_POST_SUCCESS, payload: response.data })
      }, 500)
    } catch (e) {
      dispatch({
        type: PostActionTypes.FETCH_POST_ERROR,
        payload: 'Произошла ошибка при загрузке пользователей'
      })
    }
  }
}