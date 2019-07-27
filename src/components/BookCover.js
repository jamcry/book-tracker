import React from "react";
import default_cover from "../assets/img/default_cover.png"

function BookCover(props) {
  return (
    <div className="book-cover">
      <img
        className="book-cover-image"
        src={props.url || default_cover}
        alt={`${props.title}'s book cover`}
        width="75"
        height="111"
      />
    </div>
  );
}

export default BookCover;
