import React from "react";
import BookCard from "./BookCard";
import Popup from "reactjs-popup";
import NewBookForm from "./NewBookForm";
import defaultData from "./defaultData";

import "./BookList.css";
class BookList extends React.Component {
  constructor() {
    super();
    this.addNewBook = this.addNewBook.bind(this);
    this.removeBook = this.removeBook.bind(this);
    this.state = {
      bookData: null
    };
  }

  updateLocalStorage() {
    localStorage.setItem("bookData", JSON.stringify(this.state.bookData));
  }

  componentWillMount() {
    const loadedData = JSON.parse(localStorage.getItem("bookData"));
    // Sets bookData state to loadedData if exists
    this.setState({
      bookData: loadedData || defaultData
    });
  }

  addNewBook(bookData) {
    this.setState(prevState => ({
      bookData: prevState.bookData.concat(bookData)
    }));
  }

  removeBook(bookData) {
    this.setState(prevState => ({
      bookData: prevState.bookData.filter(book => book !== bookData)
    }));
  }

  render() {
    // Updates local storage with every (re)render
    this.updateLocalStorage();

    let actions = { removeBook: this.removeBook };
    let bookCards = this.state.bookData.map(bookData => (
      <BookCard key={bookData.title} data={bookData} actions={actions} />
    ));
    return (
      <div className="book-list">
        <Popup trigger={<button className="btn">Add New Book</button>} modal>
          <NewBookForm addNewBook={this.addNewBook} />
        </Popup>
        {bookCards}
      </div>
    );
  }
}

export default BookList;
