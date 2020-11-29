import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './Reducers/rootReducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
    // Specify custom devTools options
  )
);

export default store;
