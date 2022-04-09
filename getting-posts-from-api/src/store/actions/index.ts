import * as PostsActionCreators from './posts';
import * as ClickActionCreators from './pagination';
import * as SelectedPostActionCreators from './selectedPost';

export default {
  ...PostsActionCreators,
  ...ClickActionCreators,
  ...SelectedPostActionCreators
}