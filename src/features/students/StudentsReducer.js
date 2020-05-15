import {v4 as uuidv4} from 'uuid';
import data from '../../Data';
import {sortRows} from '../helpers';
import {DELETE_ENTRY, ADD_ENTRY, EDIT_ENTRY, SORT} from './actionTypes';

const firstField = Object.keys(data[0])[0];
const initialState = {
  students: sortRows(data, firstField, true),
  sortFieldName: firstField,
  sortDirectonAsc: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DELETE_ENTRY:
      return {
        ...state,
        students: state.students.filter(entry => entry.id !== action.payload),
      };
    case ADD_ENTRY: {
      const newStudent = {
        ...action.payload,
        birthday: new Date(action.payload.birthday).toISOString(),
        id: uuidv4(),
      };
      return {...state, students: [...state.students, newStudent]};
    }
    case EDIT_ENTRY: {
      const {entry, id} = action.payload;
      const updatedStudent = {
        ...entry,
        birthday: new Date(entry.birthday).toISOString(),
      };
      const students = state.students.map(student => {
        if (student.id === id) {
          return {...updatedStudent, id};
        }
        return student;
      });
      return {...state, students};
    }
    case SORT: {
      const {students, sortFieldName, sortDirectionAsc} = state;
      if (sortFieldName === action.payload) {
        return {
          ...state,
          students: sortRows(students, sortFieldName, !sortDirectionAsc),
          sortDirectionAsc: !sortDirectionAsc,
        };
      }
      return {
        ...state,
        students: sortRows(students, action.payload, true),
        sortFieldName: action.payload,
        sortDirectionAsc: true,
      };
    }
    default:
      return state;
  }
};
