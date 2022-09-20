import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBooks } from './redux/books/books';
import './BookForm.css';

const BookForm = () => {
  const dispatch = useDispatch();
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const addNewBook = () => {
    const newBook = {
      id: uuidv4(),
      category,
      title,
      author,
    };
    dispatch(addBooks(newBook));
    setAuthor('');
    setCategory('');
    setTitle('');
  };

  return (
    <div className="form">
      <h2 className="uppercase form-title">Add New Book</h2>
      <div className="flex form-items">
        <input
          type="text"
          className="w-3/5 shadow-sm"
          placeholder="Book Title"
          id="bookTitle"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type="text"
          className="w-3/5 shadow-sm"
          placeholder="Author"
          id="author"
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        />
        <select
          className="w-2/6 shadow-sm"
          id="categoryList"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option>Category</option>
          <option>Category 1</option>
          <option>Category 2</option>
          <option>Category 3</option>
        </select>
        <div className="btn">
          <button type="button" className="uppercase text-white btn-padding" onClick={addNewBook}>Add Book</button>
        </div>
      </div>
    </div>
  );
};

export default BookForm;
