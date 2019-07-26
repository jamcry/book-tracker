import React from "react";

function BookDetails(props) {
  return (
    <div className="book-details">
      <h3>{props.title}</h3>
      <h5>{props.author}</h5>
      <p>Pages: {props.pages}</p>
    </div>
  );
}

export default BookDetails;
