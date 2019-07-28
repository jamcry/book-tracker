import React from "react";
import BookCard from "./BookCard";
import Popup from "reactjs-popup";
import NewBookForm from "./NewBookForm";

import "./BookList.css"
class BookList extends React.Component {
  constructor() {
    super();
    this.addNewBook = this.addNewBook.bind(this);
    this.removeBook = this.removeBook.bind(this);
  }
  state = {
    defaultData: [
      {
        title: "Hitchhiker's Guide to the Galaxy",
        author: "Douglas Noel Adams",
        pages: 354,
        coverUrl: "https://i.pinimg.com/originals/d1/bd/fb/d1bdfb15e7a605301115ae4f8f294fdc.png",
        currentPages: 170
      },
      {
        title: "Choke",
        author: "Chuck Palahniuk",
        pages: 270,
        coverUrl: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1403186013l/29059.jpg",
        currentPages: 0
      },
      {
        title: "The Myth of Sisyphus",
        author: "Albert Camus",
        pages: 194,
        coverUrl: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1383471186l/7349538.jpg",
        currentPages: 194
      }
    ]
  };

  addNewBook(bookData) {
    this.setState(prevState => ({
      defaultData: prevState.defaultData.concat(bookData)
    }));
  }

  removeBook(bookData) {
    this.setState(prevState => ({defaultData: prevState.defaultData.filter(book => (book !== bookData))}));
  }

  render() {
    let actions = { removeBook: this.removeBook }
    let bookCards = this.state.defaultData.map(bookData => {
      return <BookCard key={bookData.title} data={bookData} actions={actions}/>;
    });
    return (
      <div className="book-list">
        <Popup trigger={<button className="btn">Add New Book</button>} modal>
          <NewBookForm addNewBook={this.addNewBook}/>
        </Popup>
        { bookCards }
      </div>
    );
}
}

export default BookList;
