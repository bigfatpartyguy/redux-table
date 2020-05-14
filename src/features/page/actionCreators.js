import {
  RESET_PAGE,
  SET_PAGE,
  INCREMENT_PAGE,
  DECREMENT_PAGE,
} from './actionTypes';

export const resetPage = () => ({type: RESET_PAGE});
export const setPage = page => ({type: SET_PAGE, payload: page});
export const nextPage = () => ({type: INCREMENT_PAGE});
export const prevPage = () => ({type: DECREMENT_PAGE});
