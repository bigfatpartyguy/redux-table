import {RESET_PAGE} from './actionTypes';

export default (state = 1, action) => {
  switch (action.type) {
    case RESET_PAGE:
      return 1;
    default:
      return state;
  }
};
