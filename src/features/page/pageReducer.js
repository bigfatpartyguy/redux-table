import {
  RESET_PAGE,
  SET_PAGE,
  INCREMENT_PAGE,
  DECREMENT_PAGE,
} from './actionTypes';

export default (state = 1, action) => {
  switch (action.type) {
    case RESET_PAGE:
      return 1;
    case SET_PAGE:
      return action.payload;
    case INCREMENT_PAGE:
      return state + 1;
    case DECREMENT_PAGE:
      if (state > 1) return state - 1;
      return state;
    default:
      return state;
  }
};
