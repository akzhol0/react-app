import React from "react";

const MyPagination = ({ changePage, array, page }) => {
  return (
    <div className="pag-wrapper">
      {array.map((p) => (
        <p
          className={page === p ? "active-pagination" : "pagination"}
          key={p}
          onClick={() => changePage(p)}
        >
          {p}
        </p>
      ))}
    </div>
  );
};

export default MyPagination;
