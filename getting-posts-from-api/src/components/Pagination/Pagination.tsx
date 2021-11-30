import { useTypedSelector } from "../../hooks/useTypedSelector";
import styles from "./Pagination.module.scss";
import Button from '../../components/Button/Button';
import { useActions } from "../../hooks/useAction";

const Pagination: React.FC = () => {
  const { posts } = useTypedSelector(state => state.posts);
  const { numberOfPage } = useActions();

  const selectPage = (e: React.SyntheticEvent) => {
    numberOfPage(+e.currentTarget.innerHTML);
  }

  return (
    <div className={styles.buttons_nav_wrapper}>
      {[...Array(posts.length / 5)].map((n, i) =>
        <Button onClick={selectPage}>{i + 1}</Button>)}
    </div>
  )
}

export default Pagination;