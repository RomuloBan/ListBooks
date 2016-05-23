import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

const rootReducer = combineReducers({
  bookd: BooksReducer
});

export default rootReducer;
