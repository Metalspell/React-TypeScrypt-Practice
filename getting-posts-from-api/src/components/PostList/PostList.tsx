import React, { useEffect } from 'react';
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useAction";
import style from './PostList.module.scss';
import { RouteComponentProps } from '@reach/router';
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SelectedPost from '../SelectedPost/SelectedPost';

const PostList: React.FC<RouteComponentProps> = () => {
  const { posts } = useTypedSelector(state => state.posts)
  const { pageNumber } = useTypedSelector(state => state.pageNumber)
  const { fetchUsers } = useActions();
  const { idOfPost } = useActions();
  const { postNumber } = useTypedSelector(state => state.postNumber);

  useEffect(() => {
    fetchUsers();
  }, []);

  const selectPost = (e: React.SyntheticEvent) => {
    idOfPost(+e.currentTarget.id + 1)
  }

  let amountPostsPerPage = 5;

  return (
    <div className="post-list-container">
      <>
        <h1 className={style.page_counter}>Page number: <span>{pageNumber}</span></h1>
      </>
      <Router>
        <Link to="/selectedpost">
          {posts.map((item, i) => {
            if (i >= pageNumber * amountPostsPerPage - amountPostsPerPage
              && i < pageNumber * amountPostsPerPage) {
              return (
                <div id={i.toString()} key={i} className={style.post_wrapper} onClick={selectPost}>
                  <h2 className={style.news_title} key={item.id}>{item.id}.  Title: {item.title}</h2>
                  <p className={style.news_body} key={item.body}>News:  {item.body}</p>
                </div>
              )
            }
          })}
        </Link>
        <Routes>
          <Route path="/selectedpost" element={<SelectedPost />}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default PostList;
