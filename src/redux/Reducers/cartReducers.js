import { UPDATE_CART, RESET_CART } from '../Actions/cartActions';

const cartReducer = (state = {products: []}, action) => {
    console.log(action,'aciton')
  switch (action.type) {
    case UPDATE_CART:
      state.products = action.cart;
      return { ...state };
    case RESET_CART:
      state = {products: []};
      return state;
    default:
      return { ...state };
  }
};

export default cartReducer;
