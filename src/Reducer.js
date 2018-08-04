import { combineReducers } from 'redux';
import IndexReducer from './index/IndexReducer';

export default combineReducers({
  index: IndexReducer
})