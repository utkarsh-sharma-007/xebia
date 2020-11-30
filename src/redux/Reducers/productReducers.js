import { REQUEST_PRODUCTS, RECEIVED_PRODUCTS } from '../Actions/productActions';

const productsReducer = (state = {products: []}, action) => {

  switch (action.type) {
    // case CHANGE_USER:
    //   state[action.field] = action.value;
    //   return { ...state };
    // case RESET_USER:
    //   state = {};
    //   return state;
    case REQUEST_PRODUCTS:
      state = {
        products:[...state.products],
        loading: true
      };
      return state;
    case RECEIVED_PRODUCTS:
      state = {
        products:[...action.products],
        loading: false
      };
      return state;
    default:
      return { ...state };
  }
};

export default productsReducer;
