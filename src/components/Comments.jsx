import React from "react";

const Comments = ({ comments }) => {
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>Comments</h1>
      <div className="comm-wrapper">
        {comments.map((item) => (
          <div key={item.id} className="comm">
            <p>
              <span className="text-wrapper">Name:</span> {item.name}
            </p>
            <p>
              <span className="text-wrapper">Email:</span>
              {item.email}
            </p>
            <p>
              <span className="text-wrapper">Description:</span>
              {item.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
