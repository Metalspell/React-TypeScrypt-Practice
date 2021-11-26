import React, { useEffect } from 'react';
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useAction";
import styles from './UserList.module.scss';
import Button from '../Button/Button';
import classNames from 'classnames';

export interface UserListProps extends
  React.HTMLAttributes<HTMLDivElement> {
  modalWrapperVariant?: "first" | "second" | "third" | 'inactive';
  modalTitleVariant?: "modal-title-big-text" | "modal-title-medium-text" | "modal-title-small-text";
  usersListVariant?: "users-list-centered" | "users-list-not-centered";
  eachUserVariant?: 'each-user-small-text' | 'each-user-big-text';
}

const UserList = ({
  modalWrapperVariant = "first",
  modalTitleVariant = "modal-title-medium-text",
  usersListVariant = 'users-list-centered',
  eachUserVariant = 'each-user-big-text',
}: UserListProps) => {

  const { users } = useTypedSelector(state => state.user);
  const { click } = useTypedSelector(state => state.click);
  const { getUsers } = useActions();
  const { getInitialState } = useActions();
  const { removeUsers } = useActions();
  let countOfLoad = true;

  const modalWrapper = classNames(styles.root, classNames, {
    [styles.first]: modalWrapperVariant === "first",
    [styles.second]: modalWrapperVariant === "second",
    [styles.third]: modalWrapperVariant === "third",
    [styles.inactive]: modalWrapperVariant === "inactive",
  });

  const modalTitle = classNames(styles.root, classNames, {
    [styles.bigtext]: modalTitleVariant === "modal-title-big-text",
    [styles.mediumtext]: modalTitleVariant === "modal-title-medium-text",
    [styles.smalltext]: modalTitleVariant === "modal-title-small-text",
  });

  const usersList = classNames(styles.root, classNames, {
    [styles.ullistcenter]: usersListVariant === "users-list-centered",
    [styles.ullist]: usersListVariant === "users-list-not-centered",
  });

  const eachUser = classNames(styles.root, classNames, {
    [styles.smalluserinfo]: eachUserVariant === "each-user-small-text",
    [styles.biguserinfo]: eachUserVariant === "each-user-big-text",
  });

  useEffect(() => {
    if (click === true || countOfLoad === true) {
      getUsers();
    }
  }, [click]);

  const closeModal = () => {
    getInitialState();
    removeUsers();
    countOfLoad = false;
  }

  console.log(users)

  return (
    <div className={modalWrapper} role='dialog' aria-labelledby="dialog1Title" aria-describedby="dialog1Desc">
      <h1 className={modalTitle}>TechMango team:</h1>
      <ul className={usersList}>
        {users.map((user, i) =>
          <li className={eachUser} key={i}>{user.name}
            {user.lastName} - {user.position}</li>
        )}
      </ul>
      <Button onClick={closeModal} variant={'secondary'}>
        Close modal window
      </Button>
    </div>
  );
};

export default UserList;