import React from 'react';
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useAction";
import style from "../PostList/PostList.module.scss";

const SelectedPost: React.FC = () => {
  const { postNumber } = useTypedSelector(state => state.postNumber);
  const { posts } = useTypedSelector(state => state.posts);
  console.log(posts)

  return (
    <>
      {posts.map((item, i) => {
        if (item.id === postNumber) {
          return (
            <div className='selectedPostWrapper'>
              <textarea key={i} className={style.news_body}>{item.body}</textarea>
            </div>
          )
        }
      })}
    </>
  )
}
export default SelectedPost;