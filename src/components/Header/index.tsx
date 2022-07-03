import React, {FC} from 'react';

import {Logo} from 'icons';

import SearchForm from './Search';
import UserController from './User';
import Notification from './Notification';

import './index.scss';


const Header: FC = () => {
  return (
    <div className="header">
      <div className="header__wrapper">
        <div className="header__wrapper__logo">
          <Logo/>
        </div>
        <div>
          <SearchForm/>
        </div>
        <div className="header__wrapper__control">
          <div className="header__wrapper__control__container">
            <Notification/>
            <UserController/>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Header;
