export interface SelectedPostIdState {
  postNumber: number;
}
export enum SelectedPostIdTypes {
  ID_POST = 'ID_POST',
}
interface SelectedPostIdAction {
  type: SelectedPostIdTypes.ID_POST;
  payload: number;
}

export type selectedPostAction = SelectedPostIdAction;