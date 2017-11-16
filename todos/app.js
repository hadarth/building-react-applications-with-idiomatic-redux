import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/root';
import TodoApp from './components/TodoApp';

const initialState = {
  todos: [
    {
      id: '0',
      text: 'hello',
      completed: false
    },
    {
      id: '1',
      text: 'hello1',
      completed: true
    }
  ]
}

ReactDOM.render(
  <Provider store={createStore(reducer, initialState)}>
    <TodoApp />
  </Provider>,
  document.getElementById('app')
);
