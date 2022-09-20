const ADD_BOOKS = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOKS = 'bookstore/books/REMOVE_BOOKS';

const initialState = [];

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
