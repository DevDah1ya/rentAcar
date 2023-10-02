// store.js
import { createStore } from 'redux';

const initialState = {
    currentPage: 1,
  searchQuery: '', // Initial search query is empty
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_CURRENT_PAGE':
      return { ...state, currentPage: action.payload };
    case 'SET_SEARCH_QUERY':
      return { ...state, searchQuery: action.payload };
    default:
      return state;
  }
}

const store = createStore(rootReducer);

export default store;
