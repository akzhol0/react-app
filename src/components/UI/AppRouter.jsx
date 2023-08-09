import React, { useContext, useEffect, useState } from "react";
import About from "../../pages/About.jsx";
import NotFoundPage from "../../pages/NotFoundPage";
import Posts from "../../pages/Posts";
import { redirect, Navigate, Route, Routes } from "react-router-dom";
import Post from "../../pages/Post.jsx";
import Homepage from "../../pages/Homepage.jsx";
import Login from "../../pages/Login.jsx";
import { AuthContext } from "../../context/index.js";

const AppRouter = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const [counter, setCounter] = useState(0);

  return isAuth ? (
    <>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/posts" element={<Posts />}></Route>
        <Route path="/post/:id" element={<Post />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </>
  ) : (
    <>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      <Navigate to="/login" />
    </>
  );
};

export default AppRouter;
