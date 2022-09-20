const initialState = [];

const reducerBooks = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BOOKS':
      return [...state, action.book];
    case 'REMOVE_BOOKS':
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
};

// Action creator
export const addBooks = (book) => ({
  type: 'ADD_BOOKS',
  book,
});

export const removeBooks = (id) => ({
  type: 'REMOVE_BOOKS',
  id,
});

export default reducerBooks;
