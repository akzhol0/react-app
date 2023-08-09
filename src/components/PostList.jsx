import React from "react";
import PostItem from "./PostItem";

const PostList = ({ deletePost, posts, title }) => {
  if (!posts.length)
    return <h1 style={{ textAlign: "center" }}>Empty sells</h1>;

  return (
    <div className="items-wrapper">
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      {posts.map((post, index) => (
        <PostItem
          key={post.id}
          deletePost={deletePost}
          number={index + 1}
          post={post}
        />
      ))}
    </div>
  );
};

export default PostList;
