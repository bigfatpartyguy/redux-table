import {v4 as uuidv4} from 'uuid';
import tableData, {columns} from '../../Data';
import {sortRows} from '../helpers';
import {DELETE_ENTRY, ADD_ENTRY, EDIT_ENTRY, SORT} from './actionTypes';

const initialState = {
  data: sortRows(tableData, columns[0].key, true),
  sortFieldName: columns[0].key,
  sortDirectonAsc: true,
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
    default:
      return state;
  }
};
