import React from 'react';

import {DropDown} from 'icons';

import './index.scss';

const UserController = () => {
  const user = {
    name: 'Захар',
    surname: 'Палазник',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80',
  }

  return (
    <div
      className="user__controller"
    >
      {
        user.avatar
          ? <img className="user__controller__avatar" src={user.avatar} alt={user.name}/>
          : <div className="user__controller__avatar-empty">{`${user.name[0]}${user.surname[0]}`}</div>
      }
      <span className="user__controller__name">{user.name} {user.surname}</span>
      <div className="user__controller__dd">
        <DropDown/>
      </div>
    </div>
  );
}

export default UserController;
