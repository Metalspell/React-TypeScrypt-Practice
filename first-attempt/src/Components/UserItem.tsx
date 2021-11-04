import React, { FC } from "react";
import { IUser } from '../Types/types';

interface UserItemProps {
  user: IUser;
}

const UserItem: FC<UserItemProps> = ({ user }) => {
  return (
    <div>
      <div style={{ padding: 15 }}>
        {user.id}. {user.name} проживает в городе {user.address.city} на улице {user.address.street}
      </div>
    </div>
  )
}

export default UserItem;