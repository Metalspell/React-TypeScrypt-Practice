import {
  selectedPostAction,
  SelectedPostIdTypes,
  SelectedPostIdState
} from "../../types/selectedPost";

const initialState: SelectedPostIdState = {
  postNumber: 0,
}

export const selectPostReducer = (state = initialState, action: selectedPostAction): SelectedPostIdState => {
  switch (action.type) {
    case SelectedPostIdTypes.ID_POST:
      return { postNumber: action.payload}
    default:
      return state
  }
}