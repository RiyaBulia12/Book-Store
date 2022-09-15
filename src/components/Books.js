import React from 'react';
import BookForm from './BookForm';
import BookList from './BookList';

const Books = () => (
  <div className="flex flex-col">
    <BookList />
    <BookForm />
  </div>
);

export default Books;
