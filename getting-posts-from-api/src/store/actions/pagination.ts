import { Dispatch } from "redux";
import { clickAction, PaginationClickPageTypes } from '../../types/pagination';

export const numberOfPage = (n: number) => {
  return (dispatch: Dispatch<clickAction>) => {
    dispatch({ type: PaginationClickPageTypes.CLICK_PAGE, payload: n })
  }
}