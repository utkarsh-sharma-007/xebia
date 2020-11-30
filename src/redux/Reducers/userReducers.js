import { CHANGE_USER, RESET_USER, REQUEST_LOGIN, RECEIVED_LOGIN } from '../Actions/userActions';

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case CHANGE_USER:
      state[action.field] = action.value;
      return { ...state };
    case RESET_USER:
      state = {};
      return state;
    case REQUEST_LOGIN:
      state = {
        loading: true
      };
      return state;
    case RECEIVED_LOGIN:
      state = {
        ...action.user,
        loading: false
      };
      return state;
    default:
      return { ...state };
  }
};

export default userReducer;
