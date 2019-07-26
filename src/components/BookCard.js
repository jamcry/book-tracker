import React from 'react';
import BookCover from './BookCover';
import BookDetails from './BookDetails';
import BookProgress from './BookProgress';

class BookCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noStateYet: true
    }
  }
  render() {
    let {title, author, pages, coverUrl, currentPages} = this.props.data;
    return (
      <div className="book-card">
        <BookCover
          title={title}
          url={coverUrl}
        />
        <BookDetails
          title={title}
          author={author}
          pages={pages}
        />
        <BookProgress
          totalPages={pages}
          currentPages={currentPages}
        />
      </div>
    );
  }
}
 
export default BookCard;