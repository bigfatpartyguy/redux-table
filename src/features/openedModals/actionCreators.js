import {
  OPEN_DELETE_MODAL,
  OPEN_EDIT_MODAL,
  OPEN_NEW_ENTRY_MODAL,
} from './actionTypes';

export const openDeleteModal = () => ({type: OPEN_DELETE_MODAL});
export const openEditModal = () => ({type: OPEN_EDIT_MODAL});
export const opendNewEntryModal = () => ({type: OPEN_NEW_ENTRY_MODAL});
