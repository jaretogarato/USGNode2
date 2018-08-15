import { combineReducers } from 'redux';
import user from './user';
import flash from './flash';
import leads from './leads';
import users from './users';

const rootReducer = combineReducers({
  user,
  flash,
  leads,
  users,
});

export default rootReducer;
