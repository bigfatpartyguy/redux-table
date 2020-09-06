import {
  SUBMIT_INITIAL_DATA,
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
import {mapStudentsToStore} from './mappers';

// Temporary import.
import {saveTokenInfo} from '../../services/token';

export const fetchStudents = (page, limit, search = {}) => async dispatch => {
  // Temporary function for login.
  async function fetchAndSetToken() {
    const response = await fetch('http://localhost:8000/prod/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        email: 'admin@mail.dev',
        password: 'admin',
      }),
    });
    saveTokenInfo(response.headers.get('access-token'));
  }
  await fetchAndSetToken();

  const result = await fetchStudentsRequest(1, 5, search);

  const mappedData = {
    data: mapStudentsToStore(result.data),
    page: result.page,
    rowsPerPage: result.limit,
  };
  dispatch(fetchStudentsSuccess(mappedData));

  // TODO замапить
  // написать ещё один экшин который будет называться fetchStudentsSuccess и положить то что замаплено в стор
  // отобразить все логично
  // eslint-disable-next-line no-debugger
  // debugger;
};

const fetchStudentsSuccess = data => ({
  type: SUBMIT_INITIAL_DATA,
  payload: data,
});

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
