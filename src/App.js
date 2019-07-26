import React from 'react';
import BookList from './components/BookList';

function App() {
  return (
    <div className="App">
      <h1>Book Tracker</h1>
      <h3>Library and book management app</h3>
      <p>Create your online library and track your progress.</p>
      <BookList />
    </div>
  );
}

export default App;
