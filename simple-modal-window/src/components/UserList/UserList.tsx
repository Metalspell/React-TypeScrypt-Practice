import React, { useEffect } from 'react';
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useAction";
import styles from './UserList.module.scss';
import Button from '../Button/Button';
import classNames from 'classnames';

export interface UserListProps extends
  React.HTMLAttributes<HTMLDivElement> {
  variant?: "first" | "second" | "third" | 'inactive';
}

const UserList = ({
  variant = "first", ...props }: UserListProps) => {
  const { users } = useTypedSelector(state => state.user);
  const { click } = useTypedSelector(state => state.click);
  const { getUsers } = useActions();
  const { getInitialState } = useActions();
  const { removeUsers } = useActions();

  const cn = classNames(styles.root, classNames, {
    [styles.first]: variant === "first",
    [styles.second]: variant === "second",
    [styles.third]: variant === "third",
    [styles.inactive]: variant === "inactive",
  });

  useEffect(() => {
    if (click === true) {
      getUsers()
    }
  }, [click]);

  const closeModal = () => {
    getInitialState();
    removeUsers();
  }

  console.log(users)

  return (
    <div className={cn} role='dialog'>
      <h1>TechMango team:</h1>
      <ul>
        {users.map((user, i) =>
          <li key={i}>{user.name} {user.lastName} - {user.position}</li>
        )}
      </ul>
      <Button onClick={closeModal} variant={'secondary'}>Close modal window</Button>
    </div>
  );
};

export default UserList;