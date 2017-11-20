import { combineReducers } from 'redux';
import todos, * as fromTodos from './todos';

const todoApp = combineReducers({
  todos,
});

export default todoApp;


// Selectors go here and maps the same functions that are in the reducer file
// this is why we use named export.
export const getVisibleTodos = (state, filter) =>
  fromTodos.getVisibleTodos(state.todos, filter)