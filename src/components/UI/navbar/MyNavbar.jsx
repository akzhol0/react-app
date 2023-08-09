import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../context";
import MyButton from "../button/MyButton";

const MyNavbar = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);

  const exitAcc = () => {
    localStorage.removeItem('Authorized')
    setIsAuth(false)
  }

  return (
    <div className="navbar">
      <div className="navbar-items">
        <NavLink to="/">Homepage</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/posts">Posts</NavLink>
        <MyButton onClick={exitAcc} style={{color: '#fff'}}>Exit account</MyButton>
      </div>
    </div>
  );
};

export default MyNavbar;
