import {
  DELETE_ENTRY,
  ADD_ENTRY,
  EDIT_ENTRY,
  SORT,
  SET_ROW_ID,
  RESET_PAGE,
  SET_PAGE,
  INCREMENT_PAGE,
  DECREMENT_PAGE,
  SET_ROWS_PER_PAGE,
  OPEN_DELETE_MODAL,
  OPEN_EDIT_MODAL,
  OPEN_NEW_ENTRY_MODAL,
  CLOSE_MODAL,
} from './constants';

import {fetchStudentsRequest} from './services';

export const fetchStudents = (page, limit, search = {}) => async dispatch => {
  const result = await fetchStudentsRequest(1, 5, search);
  // TODO замапить
  // написать ещё один экшин который будет называться fetchStudentsSuccess и положить то что замаплено в стор
  // отобразить все логично
  // eslint-disable-next-line no-debugger
  debugger;
};

export const deleteEntry = id => ({
  type: DELETE_ENTRY,
  payload: id,
});

export const addEntry = entry => ({
  type: ADD_ENTRY,
  payload: entry,
});

export const editEntry = (id, entry) => ({
  type: EDIT_ENTRY,
  payload: {
    entry,
    id,
  },
});

export const sortEntries = sortField => ({
  type: SORT,
  payload: sortField,
});

// row ID action creator
export const setRowId = id => ({
  type: SET_ROW_ID,
  payload: id,
});

// pagination action creators
export const resetPage = () => ({type: RESET_PAGE});
export const setPage = page => ({type: SET_PAGE, payload: page});
export const nextPage = () => ({type: INCREMENT_PAGE});
export const prevPage = () => ({type: DECREMENT_PAGE});
export const setRowsPerPage = numOfRows => ({
  type: SET_ROWS_PER_PAGE,
  payload: numOfRows,
});

// openedModals action creators
export const openDeleteModal = () => ({type: OPEN_DELETE_MODAL});
export const openEditModal = () => ({type: OPEN_EDIT_MODAL});
export const openNewEntryModal = () => ({type: OPEN_NEW_ENTRY_MODAL});
export const closeModal = () => ({type: CLOSE_MODAL});
