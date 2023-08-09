import React, { useState } from "react";
import MyButton from "../components/UI/button/MyButton";
import MyInput from "../components/UI/input/MyInput";

const PostForm = ({ create }) => {
  const [data, setData] = useState({ title: "", body: "" });

  const addNewPost = () => {
    const newPost = { id: Date.now(), title: data.title, body: data.body };
    create(newPost);

    setData({ title: "", body: "" })
  };

  return (
    <form>
      <MyInput
        value={data.title}
        onChange={(e) =>
          setData((prev) => ({ ...prev, title: e.target.value }))
        }
        type="text"
        placeholder="Post name"
      />
      <MyInput
        value={data.body}
        onChange={(e) => setData((prev) => ({ ...prev, body: e.target.value }))}
        type="text"
        placeholder="Post description"
      />
      <MyButton type="button" onClick={addNewPost}>
        Create Post
      </MyButton>
    </form>
  );
};

export default PostForm;
