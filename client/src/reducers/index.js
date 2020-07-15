import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { menu } from './menu';

const createRootReducer = () => combineReducers({
  form,
  menu,
});
export default createRootReducer;
