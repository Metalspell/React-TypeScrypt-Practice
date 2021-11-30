import { combineReducers } from "redux";
import { clickPageReducer } from "./paginationReducer";
import { postsReducer } from "./postsReducer";

export const rootReducer = combineReducers({
  posts: postsReducer,
  pageNumber: clickPageReducer,
})

export type RootState = ReturnType<typeof rootReducer>