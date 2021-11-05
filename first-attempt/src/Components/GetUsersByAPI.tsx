import React, { FC } from 'react';
import { IUser } from '../Types/types';
import UserItem from './UserItem'

interface UserListByAPIProps {
  apiUsers: IUser[]
}

const UserListByApi: FC<UserListByAPIProps> = ({ apiUsers }) => {
  return (
    <div>
      {apiUsers.map(user =>
        <UserItem key={user.id} user={user} />
      )}
    </div>
  )
}

export default UserListByApi;