import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";
import { IUser, TableNavData } from './Types/types';
import Usertable from './Components/Userstable/Usertable';

const App = () => {
  const [apiUsers, setApiUsers] = useState<IUser[]>([]);
  const tableNavigation: TableNavData[] = [
    { "text": "Id" },
    { "text": "First and last name" },
    { "text": "City" },
    { "text": "Street" },
    { "text": "Phone" },
    { "text": "Email" }
  ];

  useEffect(() => {
    fetchUsers()
  }, []);

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
      setApiUsers(response.data);
      console.log(response.data)
    } catch (e) {
      alert('Error!!!');
    };
  };

  return (
    <div className="general-container">
      <Usertable tableNavElem={tableNavigation} apiUsers={apiUsers} />
    </div>
  )
};

export default App;
