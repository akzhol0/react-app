import React from "react";

const PostById = ({data, id}) => {
  return (
    <div className="post-wrapper">
      <h1>Post number: {id}</h1>
      <h2>Post title: {data.title}</h2>
      <div>
        <h2>Post description:</h2>
        <h3>{data.body}</h3>
      </div>
    </div>
  );
};

export default PostById;
