import React, { FC } from 'react';
import { IUser, TableNavData } from '/home/dmitry-k/Desktop/Coding/LevelUp/ReactTS/api-users-list/src/Types/types';
import '../Userstable/Usertable.css'

interface TableNavAndUserList {
  tableNavElem: TableNavData[];
  apiUsers: IUser[];
}

const Usertable: FC<TableNavAndUserList> = ({ tableNavElem, apiUsers }) => {
  return (
    <table>
      <thead>
        <tr>
          {tableNavElem.map(item => {
            return (
              <th>{item.text}</th>
            )
          })}
        </tr>
      </thead>
      <tbody>
        {apiUsers.map(item => {
          return (
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.address.city}</td>
              <td>{item.address.street}</td>
              <td>{item.phone}</td>
              <td>{item.email}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Usertable;