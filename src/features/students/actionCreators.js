import {DELETE_ENTRY, ADD_ENTRY, EDIT_ENTRY} from './actionTypes';

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
