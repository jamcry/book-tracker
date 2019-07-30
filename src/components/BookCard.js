import React from "react";
import BookCover from "./BookCover";
import BookDetails from "./BookDetails";
import BookProgress from "./BookProgress";
import BookActions from "./BookActions";

class BookCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noStateYet: true
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleDelete() {
    if (
      window.confirm(
        `You are deleting the book "${
          this.props.data.title
        }" from your library.`
      )
    )
      this.props.actions.removeBook(this.props.data);
  }

  handleUpdate(newBookData) {
    const oldBookData = this.props.data;
    this.props.actions.updateBook(oldBookData, newBookData)
  }

  render() {
    let { title, author, pages, coverUrl, currentPages } = this.props.data;
    return (
      <div className="book-card col">
        <div className="row">
          <BookCover title={title} url={coverUrl} />
          <BookDetails title={title} author={author} pages={pages} />
          <BookProgress totalPages={pages} currentPages={currentPages} />
        </div>
        <div className="row">
          <BookActions
            data={this.props.data}
            handleDelete={this.handleDelete}
            handleUpdate={this.handleUpdate}
          />
        </div>
      </div>
    );
  }
}

export default BookCard;
