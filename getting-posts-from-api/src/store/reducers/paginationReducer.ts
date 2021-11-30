import {
  clickAction,
  PaginationClickPageTypes,
  PaginationClickState
} from "../../types/pagination";

const initialState: PaginationClickState = {
  pageNumber: 1,
}

export const clickPageReducer = (state = initialState, action: clickAction): PaginationClickState => {
  switch (action.type) {
    case PaginationClickPageTypes.CLICK_PAGE:
      return { pageNumber: action.payload}
    default:
      return state
  }
}