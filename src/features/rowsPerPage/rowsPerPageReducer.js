import {SET_ROWS_PER_PAGE} from './actionTypes';

export default (state = 4, action) => {
  switch (action.type) {
    case SET_ROWS_PER_PAGE:
      return action.payload;
    default:
      return state;
  }
};
