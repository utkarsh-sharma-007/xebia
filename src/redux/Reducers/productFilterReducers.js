import { REQUEST_PRODUCTS_FILTER, RECEIVED_PRODUCTS_FILTER } from '../Actions/productFilterActions';

const productsFiltersReducer = (state = {filters:[]}, action) => {
  
  switch (action.type) {
    // case CHANGE_USER:
    //   state[action.field] = action.value;
    //   return { ...state };
    // case RESET_USER:
    //   state = {};
    //   return state;
    case REQUEST_PRODUCTS_FILTER:
      state = {
        loading: true
      };
      return state;
    case RECEIVED_PRODUCTS_FILTER:
      state = {
        filters: [...action.filters],
        loading: false
      };
      return state;
    default:
      return { ...state };
  }
};

export default productsFiltersReducer;
