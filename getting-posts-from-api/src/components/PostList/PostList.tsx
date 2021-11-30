import React, { useEffect } from 'react';
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useAction";
import style from './PostList.module.scss';

const PostList: React.FC = () => {
  const { posts } = useTypedSelector(state => state.posts)
  const { pageNumber } = useTypedSelector(state => state.pageNumber)
  const { fetchUsers } = useActions();

  useEffect(() => {
    fetchUsers();
  }, []);

  let amountPostsPerPage = 5

  return (
    <div className="post-list-container">
      {posts.map((item, i) => {
        if (i >= pageNumber * amountPostsPerPage - amountPostsPerPage 
          && i < pageNumber * amountPostsPerPage) {
          return (
            <div key={i} className={style.post_wrapper}>
              <h2 className={style.news_title} key={item.id}>{item.id}.  Title: {item.title}</h2>
              <p className={style.news_body} key={item.body}>News:  {item.body}</p>
            </div>
          )
        }
      })}
    </div>
  );
}

export default PostList;