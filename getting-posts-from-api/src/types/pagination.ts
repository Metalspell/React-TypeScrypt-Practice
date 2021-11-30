export interface PaginationClickState {
  pageNumber: number;
}
export enum PaginationClickPageTypes {
  CLICK_PAGE = 'CLICK_PAGE',
}
interface PaginationClickPageAction {
  type: PaginationClickPageTypes.CLICK_PAGE;
  payload: number;
}

export type clickAction = PaginationClickPageAction 