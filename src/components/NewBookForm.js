import React from 'react';
import "./NewBookForm.css";

export default function NewBookForm() {
  return(
    <form className="form">
      New Book
      <label>
        Title
        <input type="text" name="title" />
      </label>
      <label>
        Author
        <input type="text" name="title" />
      </label>
      <label>
        Pages
        <input type="number" name="title" />
      </label>
      <button className="btn">Add</button>
    </form>
  )
}