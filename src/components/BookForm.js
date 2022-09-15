import React from 'react';
import './BookForm.css';

const BookForm = () => (
  <div className="form">
    <h2 className="uppercase form-title">Add New Book</h2>
    <div className="flex form-items">
      <input type="text" className="w-3/5 shadow-sm" placeholder="Book Title" />
      <select className="w-2/6 shadow-sm">
        <option>Category</option>
        <option>Action</option>
        <option>Science Fiction</option>
        <option>Economy</option>
      </select>
      <div className="btn">
        <button type="button" className="uppercase text-white btn-padding">Add Book</button>
      </div>
    </div>
  </div>
);

export default BookForm;
