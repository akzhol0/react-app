import React from "react";
import { Link } from "react-router-dom";
import MyButton from "./UI/button/MyButton";

const PostItem = ({ deletePost, post, number }) => {
  return (
    <div>
      <div className="post">
        <div className="post-content">
          <strong>{post.id}. <Link to={`/post/${post.id}`}>{post.title}</Link></strong>
          <div>{post.body}</div>
          <p>post views: {Math.round(Math.random() * 1000)}k</p>
        </div>
        <div className="post-btns">
          <MyButton onClick={() => deletePost(post)}>Delete</MyButton>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
