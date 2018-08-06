import { combineReducers } from 'redux';
import IndexReducer from './index/IndexReducer';
import ControlesReducer from './Controles/ControlesReducer';

export default combineReducers({
  index: IndexReducer,
  controles: ControlesReducer
})