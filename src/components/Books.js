import React from 'react';
import { useSelector } from 'react-redux';
import BookForm from './BookForm';
import BookList from './BookList';

const Books = () => {
  const booksObj = useSelector((state) => state.books);

  return (
    <div className="flex flex-col">
      <BookList bookList={booksObj} />
      <BookForm />
    </div>
  );
};

export default Books;
