import React from 'react';

function BookProgress(props) {
  return(
    <div className="book-progress">
      <h1>{(props.currentPages / props.totalPages).toFixed(1)} %</h1>
    </div>
  );
}

export default BookProgress;