import * as PostsActionCreators from './posts';
import * as ClickActionCreators from './pagination';

export default {
  ...PostsActionCreators,
  ...ClickActionCreators,
}