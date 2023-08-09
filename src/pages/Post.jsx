import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Comments from "../components/Comments.jsx";
import PostById from "../components/PostById.jsx";
import MyButton from "../components/UI/button/MyButton.jsx";
import MyLoader from "../components/UI/loader/MyLoader.jsx";

const Post = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [comments, setComments] = useState([]);
  const [isLoaded, setIsLoader] = useState(false);
  const [error, setError] = useState("");
  const [commisLoaded, setCommIsLoader] = useState(false);

  async function getById() {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    setData(response.data);
    setIsLoader(true);
  }

  async function getCommById() {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );
    setComments(response.data);
    setCommIsLoader(true);
  }

  useEffect(() => {
    try {
      getById();
      getCommById();
    } catch (e) {
      setError(e.message);
    }
  }, []);
  const navigate = useNavigate();

  return (
    <div>
      {error ? (
        <h1>{error}</h1>
      ) : isLoaded && commisLoaded ? (
        <div> 
          <PostById data={data} id={id}/>
          <Comments comments={comments}/>
          <MyButton onClick={() => navigate(-1)}>Go back</MyButton>
        </div>
      ) : (
        <MyLoader />
      )}
    </div>
  );
};

export default Post;
