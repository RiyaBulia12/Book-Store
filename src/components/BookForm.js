import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// automated id generator library
import { v4 as uuidv4 } from 'uuid';
import { postBookApi } from '../redux/books/books';
import './BookForm.css';

const BookForm = () => {
  const dispatch = useDispatch();
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const addNewBook = () => {
    if (!title || !category || !author) return;

    const newBook = {
      item_id: uuidv4(),
      category,
      title,
      author,
    };
    dispatch(postBookApi(newBook));
    setAuthor('');
    setCategory('');
    setTitle('');
  };

  const titleChange = (event) => setTitle(event.target.value);
  const authorChange = (event) => setAuthor(event.target.value);
  const categoryChange = (event) => setCategory(event.target.value);
  return (
    <div className="form">
      <h2 className="uppercase form-title">Add New Book</h2>
      <div className="flex form-items flex-col lg:flex-row">
        <input
          required
          type="text"
          className="lg:w-3/5 shadow-sm"
          placeholder="Book Title"
          id="bookTitle"
          value={title}
          onChange={titleChange}
        />
        <input
          required
          type="text"
          className="lg:w-3/5 shadow-sm"
          placeholder="Author"
          id="author"
          value={author}
          onChange={authorChange}
        />
        <select
          required
          className="lg:w-2/6 shadow-sm"
          id="categoryList"
          value={category}
          onChange={categoryChange}
        >
          <option>Select Category</option>
          <option>Drama</option>
          <option>Fiction</option>
          <option>Action</option>
          <option>Economy</option>
          <option>Science Fiction</option>
        </select>
        <div className="btn m-auto">
          <button
            type="button"
            className="uppercase text-white btn-padding"
            onClick={addNewBook}
          >
            Add Book
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookForm;
