import { v4 as uuidv4 } from 'uuid';

const ADD_BOOKS = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOKS = 'bookstore/books/REMOVE_BOOKS';

const initialState = [{
  id: uuidv4(),
  author: 'Suzzane Collins',
  title: 'The Hunger Game',
  category: 'Action',
},
{
  id: uuidv4(),
  author: 'Frank Herbert',
  title: 'Dune',
  category: 'Science Fiction',
},
{
  id: uuidv4(),
  author: 'Suzzane Collins',
  title: 'Capital in the Twenty-First Century',
  category: 'Economy',
}];

const reducerBooks = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOKS:
      // immutable state: ... create a new array from existing state
      return [...state, action.book];
    case REMOVE_BOOKS:
      // immutable state: filter method does not change original array instead
      // makes a new array with filtered item
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
};

// Action creator
export const addBooks = (book) => ({
  type: ADD_BOOKS,
  book,
});

export const removeBooks = (id) => ({
  type: REMOVE_BOOKS,
  id,
});

export default reducerBooks;
