import React, { FC } from 'react';
import { IUser, TableNavData } from '../../Types/types'
import '../Userstable/Usertable.css';

interface TableNavAndUserList {
  tableNavElem: TableNavData[];
  apiUsers: IUser[];
}

const Usertable: FC<TableNavAndUserList> = ({ tableNavElem, apiUsers }, { countOfUsers = 5 }) => {
  return (
    <table>
      <thead>
        <tr>
          {tableNavElem.map((item, i) => {
            return (
              <th className="table-nav-item" key={i}>{item.text}</th>
            )
          })}
        </tr>
      </thead>
      <tbody>
        {apiUsers.map((item, i) => {
          if (i < countOfUsers) {
            return (
              <tr key={i}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.address.city}</td>
                <td>{item.address.street}</td>
                <td>{item.phone}</td>
                <td>{item.email}</td>
              </tr>
            )
          }
        })}
      </tbody>
    </table>
  )
}

export default Usertable;