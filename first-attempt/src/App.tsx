import React, { useState, useEffect} from 'react';
import './App.css';
import Card from './Components/Card';
import { CardVariant } from './Components/Card';
import UserList from './Components/UserList';
import { IUser } from './Types/types';
import axios from "axios";
import UserListByApi from './Components/GetUsersByAPI';

const App = () => {
  const [apiUsers, setApiUsers] = useState<IUser[]>([]);

  const users: IUser[] = [
    { id: 1, name: 'Vasya', email: 'blabla@bla.ua', address: { city: 'Kiev', street: 'Sadovaya', zipcode: '123' } },
    { id: 1, name: 'Galya', email: 'blabla@bla.ua', address: { city: 'Lviv', street: 'Uyutnaya', zipcode: '435' } }
  ]

  useEffect(() => {
    fetchUsers()
    console.log(apiUsers)
  }, []);

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
      setApiUsers(response.data);
      console.log(apiUsers)
    } catch (e) {
      alert('Error!!!');
    };
  };


  return (
    <div>
      <Card onClick={(num) => console.log('Function work!', num)} variant={CardVariant.primary} width='20vw' height='20vw'>
        <button>Push</button>
      </ Card>
      <UserList users={users} />
      <>
      <UserListByApi apiUsers={apiUsers}/>
      </>
    </div >
  )
};


export default App;