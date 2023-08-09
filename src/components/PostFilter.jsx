import React from "react";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({filter, setFilter}) => {
  return (
    <div>
      <MyInput
        value={filter.query}
        onChange={(e) => setFilter({...filter, query: e.target.value})}
        placeholder="Search..."
      ></MyInput>
      <MySelect
        value={filter.sort}
        onChangeInput={selectedSort => setFilter({...filter, sort: selectedSort})}
        defaultValue={"Sort"}
        options={[
          { value: "title", name: "Sort by titles", id: 1 },
          { value: "body", name: "Sort by descriptions", id: 2 },
        ]}
      />
    </div>
  );
};

export default PostFilter;
