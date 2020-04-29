import React, { Component } from "react";

function Pagination({ gotoNextPage, gotoPrevPage }) {
  return (
    <div>
      {gotoPrevPage && <button onClick={gotoPrevPage}>Previous</button>}
      {gotoPrevPage && <button onClick={gotoNextPage}>Next</button>}
    </div>
  );
}

export default Pagination;
