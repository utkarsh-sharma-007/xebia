import { REQUEST_PRODUCTS, RECEIVED_PRODUCTS } from '../Actions/productActions';

const productsReducer = (state = {}, action) => {

  switch (action.type) {
    // case CHANGE_USER:
    //   state[action.field] = action.value;
    //   return { ...state };
    // case RESET_USER:
    //   state = {};
    //   return state;
    case REQUEST_PRODUCTS:
      state = {
        loading: true
      };
      return state;
    case RECEIVED_PRODUCTS:
      state = {
        ...action.products,
        loading: false
      };
      return state;
    default:
      return { ...state };
  }
};

export default productsReducer;
