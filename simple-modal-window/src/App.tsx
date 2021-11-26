import React from 'react';
import './App.css';
import Button from './components/Button/Button';
import UserList from './components/UserList/UserList';
import { useTypedSelector } from "./hooks/useTypedSelector";
import { useActions } from "./hooks/useAction";

const App: React.FC = () => {
  const { click } = useTypedSelector(state => state.click)
  const { getClick } = useActions();

  const activateModal = () => {
    getClick()
  }

  console.log(click)
  return (
    <div className="general-wrapper">
      <Button variant={click === false ? 'primary' : "tertiary"}
        onClick={activateModal}>Show users list!</Button>
      <UserList modalWrapperVariant={click === true ? "first" : "inactive"} />
    </div>
  );
}

export default App;
