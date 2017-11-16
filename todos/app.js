import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/root';
import TodoApp from './components/TodoApp';
import { loadStateFromLocalStorage, saveStateToLocalStorage } from './LocalStorage'
import throttle from 'lodash/throttle'

const initialState = loadStateFromLocalStorage();

const store = createStore(rootReducer, initialState);

store.subscribe(throttle(() => {
  saveStateToLocalStorage({
    todos: store.getState().todos
  })
}, 1000));

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('app')
);
