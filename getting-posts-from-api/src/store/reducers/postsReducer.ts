import { PostAction, PostActionTypes, PostState } from "../../types/posts";

const initialState: PostState = {
  posts: [],
  loading: false,
  error: null
}

export const postsReducer = (state = initialState, action: PostAction): PostState => {
  switch (action.type) {
    case PostActionTypes.FETCH_POST:
      return { loading: true, error: null, posts: [] }
    case PostActionTypes.FETCH_POST_SUCCESS:
      return { loading: false, error: null, posts: action.payload }
    case PostActionTypes.FETCH_POST_ERROR:
      return { loading: false, error: action.payload, posts: [] }
    default:
      return state
  }
}