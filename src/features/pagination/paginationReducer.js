import {
  RESET_PAGE,
  SET_PAGE,
  INCREMENT_PAGE,
  DECREMENT_PAGE,
  SET_ROWS_PER_PAGE,
} from './actionTypes';

const initialState = {
  page: 1,
  rowsPerPage: 4,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RESET_PAGE:
      return {...state, page: 1};
    case SET_PAGE:
      return {...state, page: action.payload};
    case INCREMENT_PAGE:
      return {...state, page: state.page + 1};
    case DECREMENT_PAGE:
      if (state.page > 1) return {...state, page: state.page - 1};
      return state;
    case SET_ROWS_PER_PAGE:
      return {...state, rowsPerPage: action.payload};
    default:
      return state;
  }
};
