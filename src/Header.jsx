import React from "react";
import "./Header.css";
import {
  Apps,
  ArrowDropDown,
  Menu,
  Notifications,
  Search,
} from "@mui/icons-material";
import { IconButton, Avatar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";

const Header = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const signout = () => {
    signOut(auth).then(() => {
      dispatch(logout());
    });
  };

  return (
    <div className='header'>
      <div className='header__left'>
        <IconButton>
          <Menu />
        </IconButton>
        <img
          src='https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png'
          alt=''
        />
      </div>

      <div className='header__middle'>
        <Search />
        <input type='text' placeholder='Search mail' />
        <ArrowDropDown className='header__inputCaret' />
      </div>

      <div className='header__right'>
        <IconButton>
          <Apps />
        </IconButton>
        <IconButton>
          <Notifications />
        </IconButton>
        <IconButton onClick={signout}>
          <Avatar src={user?.photoUrl} />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
