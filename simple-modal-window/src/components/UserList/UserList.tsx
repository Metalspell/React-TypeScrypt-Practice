import React, { useEffect } from 'react';
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useAction";
import './UserList.css';
import Button from '../Button/Button';

const UserList: React.FC = () => {
  const { users } = useTypedSelector(state => state.user);
  const { click } = useTypedSelector(state => state.click);
  const { getUsers } = useActions();
  const { getInitialState } = useActions();
  const { removeUsers } = useActions();

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
    <div className={click === true ? "modal-window active" : "inactive"}>
      <h1>TechMango team</h1>
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