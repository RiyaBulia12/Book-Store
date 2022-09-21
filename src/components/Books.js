import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooksApi } from '../redux/books/books';
import BookForm from './BookForm';
import BookList from './BookList';

const Books = () => {
  const booksObj = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooksApi());
  }, [booksObj.length, dispatch]);

  return (
    <div className="flex flex-col">
      {booksObj.length > 0
        ? <BookList bookList={booksObj} />
        : <p>No books found</p>}
      <BookForm />
    </div>
  );
};

export default Books;
