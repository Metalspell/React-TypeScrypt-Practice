import { combineReducers } from "redux";
import { clickPageReducer } from "./paginationReducer";
import { postsReducer } from "./postsReducer";
import { selectPostReducer } from "./selectedPostReducer";

export const rootReducer = combineReducers({
  posts: postsReducer,
  pageNumber: clickPageReducer,
  postNumber: selectPostReducer,
})

export type RootState = ReturnType<typeof rootReducer>