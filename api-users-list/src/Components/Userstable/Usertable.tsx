import React, { FC } from 'react';
import { IUser, TableNavData } from '../../Types/types'
import '../Userstable/Usertable.css';
import PropTypes from "prop-types";

interface TableNavAndUserList {
  tableNavElem: TableNavData[];
  apiUsers: IUser[];
}

const Usertable: FC<TableNavAndUserList> = ({ tableNavElem, apiUsers }, { countOfUsers}) => {
  return (
    <table>
      <thead>
        <tr>
          {tableNavElem.map((item, i) => {
            return (
              <th key={i}>{item.text}</th>
            )
          })}
        </tr>
      </thead>
      <tbody>
        {apiUsers.map((item, i) => {
          // if (i < countOfUsers) {
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
          // }
        })}
      </tbody>
    </table>
  )
}

Usertable.propTypes = {
  apiUsers: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  tableNavElem: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
}

export default Usertable;