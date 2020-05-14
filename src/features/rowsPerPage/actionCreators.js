import {SET_ROWS_PER_PAGE} from './actionTypes';

export const setRowsPerPage = numOfRows => ({
  type: SET_ROWS_PER_PAGE,
  payload: numOfRows,
});
