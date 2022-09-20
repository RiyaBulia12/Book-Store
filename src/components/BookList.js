import React from 'react';
import './BookList.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBooks } from '../redux/books/books';

// destructuring { bookList }
const BookList = ({ bookList }) => {
  const dispatch = useDispatch();
  const removeClick = (event) => dispatch(removeBooks(event.target.id));

  return (
    <div className="panel">

      {bookList.map((book) => {
        const {
          id, category, title, author,
        } = book;
        return (
          <div className="cards bg-white shadow-xl flex flex-row mb-5" key={id}>

            <div className="w-full">
              <div className="flex flex-col">
                <ul>
                  <li className="genre m-0">{category}</li>
                  <li className="title roboto m-0">{title}</li>
                  <li className="author roboto slate-blue m-0">{author}</li>
                </ul>
              </div>

              <div className="inline-flex slate-blue actions roboto center">
                <button type="button" className="action text-sm font-medium bg-white">
                  Comments
                </button>
                <button
                  type="button"
                  className="action text-sm ml-3 font-medium bg-white"
                  id={id}
                  onClick={removeClick}
                >
                  Remove
                </button>
                <button type="button" className="action text-sm ml-3 font-medium bg-white ">
                  Edit
                </button>
              </div>

            </div>

            <div className="w-full flex">
              <div className="flex center">
                <div>
                  <svg className="w-20 h-20">
                    <circle
                      className="text-gray-300"
                      strokeWidth="5"
                      strokeDasharray="200px;"
                      strokeDashoffset="0"
                      stroke="currentColor"
                      fill="transparent"
                      r="30"
                      cx="40"
                      cy="40"
                    />
                    <circle
                      className="text-blue-600"
                      strokeWidth="5"
                      strokeDasharray="166px, 55px"
                      strokeDashoffset="80px"
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="transparent"
                      r="30"
                      cx="40"
                      cy="40"
                    />
                  </svg>
                </div>
                <div className="percent-complete">
                  74%
                  <h4 className="completed">
                    Completed
                  </h4>
                </div>
              </div>
              <div className="flex-col px-[3.5rem] roboto">
                <p className="current-chapter uppercase">Current Chapter</p>
                <p className="current-lesson">Chapter 17</p>
                <div className="btn">
                  <button type="button" className="uppercase text-white">Update Progress</button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

// 'bookList' is missing in props validation --- react/prop-types
BookList.propTypes = {
  bookList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      author: PropTypes.string,
      title: PropTypes.string,
      category: PropTypes.string,
    }),
  ).isRequired,
};

export default BookList;
