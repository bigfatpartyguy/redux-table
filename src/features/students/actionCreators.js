import {DELETE_ENTRY} from './actionTypes';

export const deleteEntry = id => ({
  type: DELETE_ENTRY,
  payload: id,
});
