import React, { FC} from 'react';
import { IUser, TableNavData } from '../../Types/types'
import '../Userstable/Usertable.css';
import PropTypes from "prop-types";

interface TableNavAndUserList {
  tableNavElem: TableNavData[];
  apiUsers: IUser[];
}

let countOfUsers = 0;

const Usertable: FC<TableNavAndUserList> = ({ tableNavElem, apiUsers }, {countOfUsers = 5}) => {
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
        {apiUsers.map((item, i) => {
          if (i < countOfUsers) {
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
          }
        })}
      </tbody>
    </table>
  )
}


export default Usertable;






{/* <tbody>
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
</tbody> */}