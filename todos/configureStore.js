import { createStore } from 'redux';
import rootReducer from './reducers/root';
import { loadStateFromLocalStorage, saveStateToLocalStorage } from './LocalStorage'
import throttle from 'lodash/throttle';

const  configureStore = () => {
  const initialState = loadStateFromLocalStorage();
  const store = createStore(rootReducer, initialState);

  store.subscribe(throttle(() => {
    saveStateToLocalStorage({
      todos: store.getState().todos
    })
  }, 1000));

  return store;
};

export default configureStore;