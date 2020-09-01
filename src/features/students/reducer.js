import {v4 as uuidv4} from 'uuid';
import tableData, {columns} from '../../Data';
import {sortRows} from '../helpers';
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

const initialState = {
  data: [],
  sortFieldName: columns[0].key,
  sortDirectonAsc: true,
  rowId: null,
  page: 1,
  rowsPerPage: 4,
  modals: {
    delete: false,
    add: false,
    edit: false,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DELETE_ENTRY:
      return {
        ...state,
        data: state.data.filter(entry => entry.id !== action.payload),
      };
    case ADD_ENTRY: {
      const newEntry = {
        ...action.payload,
        birthday: new Date(action.payload.birthday).toISOString(),
        id: uuidv4(),
      };
      return {...state, data: [...state.data, newEntry]};
    }
    case EDIT_ENTRY: {
      const {entry, id} = action.payload;
      const updatedEntry = {
        ...entry,
        birthday: new Date(entry.birthday).toISOString(),
      };
      const data = state.data.map(entity => {
        if (entity.id === id) {
          return {...updatedEntry, id};
        }
        return entity;
      });
      return {...state, data};
    }
    case SORT: {
      const {data, sortFieldName, sortDirectionAsc} = state;
      if (sortFieldName === action.payload) {
        return {
          ...state,
          data: sortRows(data, sortFieldName, !sortDirectionAsc),
          sortDirectionAsc: !sortDirectionAsc,
        };
      }
      return {
        ...state,
        data: sortRows(data, action.payload, true),
        sortFieldName: action.payload,
        sortDirectionAsc: true,
      };
    }
    case SET_ROW_ID: {
      return {...state, rowId: action.payload};
    }

    // Pagination
    case RESET_PAGE:
      return {...state, page: 1};
    case SET_PAGE:
      return {...state, page: action.payload};
    case INCREMENT_PAGE:
      return {...state, page: state.page + 1};
    case DECREMENT_PAGE: {
      if (state.page > 1) return {...state, page: state.page - 1};
      return state;
    }
    case SET_ROWS_PER_PAGE:
      return {...state, rowsPerPage: action.payload};

    // Modals
    case OPEN_DELETE_MODAL:
      return {...state, modals: {...state.modals, delete: true}};
    case OPEN_EDIT_MODAL:
      return {...state, modals: {...state.modals, edit: true}};
    case OPEN_NEW_ENTRY_MODAL:
      return {...state, modals: {...state.modals, add: true}};
    case CLOSE_MODAL: {
      const modals = {};
      for (const key in state.modals) {
        if ({}.hasOwnProperty.call(state.modals, key)) {
          // eslint-disable-next-line fp/no-mutation
          modals[key] = false;
        }
      }
      return {...state, modals};
    }
    default:
      return state;
  }
};
