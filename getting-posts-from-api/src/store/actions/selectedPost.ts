import { Dispatch } from "redux";
import { selectedPostAction, SelectedPostIdTypes } from '../../types/selectedPost';

export const idOfPost = (num: number) => {
  return (dispatch: Dispatch<selectedPostAction>) => {
    dispatch({ type: SelectedPostIdTypes.ID_POST, payload: num });
  }
}