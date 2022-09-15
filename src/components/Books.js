import React from 'react';
import BookForm from './BookForm';
import BookList from './BookList';

const Books = () => {
  const booksObj = [{
    id: 1,
    author: 'Suzzane Collins',
    title: 'The Hunger Game',
    category: 'Action',
  },
  {
    id: 2,
    author: 'Frank Herbert',
    title: 'Dune',
    category: 'Science Fiction',
  },
  {
    id: 3,
    author: 'Suzzane Collins',
    title: 'Capital in the Twenty-First Century',
    category: 'Economy',
  }];

  return (
    <div className="flex flex-col">
      <BookList bookList={booksObj} />
      <BookForm />
    </div>
  );
};

export default Books;
