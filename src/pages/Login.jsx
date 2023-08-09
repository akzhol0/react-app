import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import MyButton from "../components/UI/button/MyButton";
import MyInput from "../components/UI/input/MyInput";
import MyNavbar from "../components/UI/navbar/MyNavbar";
import { AuthContext } from "../context";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const check = () => {
        setIsAuth(true);
        localStorage.setItem('Authorized', true);
        <Navigate to="/posts" />
    }
    
    return (
    <div className="wrapper">
      <MyNavbar />
      <div>
        <h1 style={{ textAlign: "center" }}>Login page</h1>
        <MyInput placeholder="Login" type="text" />
        <MyInput placeholder="Password" type="password" />
        <MyButton onClick={check}>Enter</MyButton>
      </div>
    </div>
  );
};

export default Login;
