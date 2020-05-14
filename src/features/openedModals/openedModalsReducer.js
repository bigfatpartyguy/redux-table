import {
  OPEN_DELETE_MODAL,
  OPEN_EDIT_MODAL,
  OPEN_NEW_ENTRY_MODAL,
} from './actionTypes';

const initialState = {
  delete: false,
  add: false,
  edit: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case OPEN_DELETE_MODAL:
      return {...state, delete: true};
    case OPEN_EDIT_MODAL:
      return {...state, edit: true};
    case OPEN_NEW_ENTRY_MODAL:
      return {...state, add: true};
    default:
      return state;
  }
};
