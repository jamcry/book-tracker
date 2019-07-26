import React from "react";

function BookCover(props) {
  return (
    <div className="book-cover">
      <img
        className="book-cover-image"
        src={props.url}
        alt={`${props.title}'s book cover`}
        width="75"
        height="111"
      />
    </div>
  );
}

export default BookCover;
