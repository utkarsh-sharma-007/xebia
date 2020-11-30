// import counterReducer from './counterReducer';
// import userReducer from './userReducer';
// import registerUserReducer from './registerUserReducer';
// import loginUserReducer from './loginUserReducers';
// import clientInfoReducer from './clientInfoReducer';
// import clientTokenReducer from './tokenReducer';
// import userDetailsReducer from './userDetailsReducer';
// import businessAccountReducer from './businessAccountReducer';
// import productReducer from './productReducer';
// import cartReducer from './cartReducer';
// import productsReducer from './productsReducer';
// import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';
import userReducer from './userReducers'
import productReducer from './productReducers'
import productFilterReducer from './productFilterReducers'
import cartReducer from './cartReducers'

const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
  filters: productFilterReducer,
  cart: cartReducer
});

export default rootReducer;
