import {v4 as uuidv4} from 'uuid';
import data from '../../Data';
import {sortRows} from '../helpers';
import {DELETE_ENTRY, ADD_ENTRY, EDIT_ENTRY} from './actionTypes';

const initialState = sortRows(data, Object.keys(data[0])[0], true);

export default (state = initialState, action) => {
  switch (action.type) {
    case DELETE_ENTRY:
      return state.filter(entry => entry.id !== action.payload);
    case ADD_ENTRY: {
      const newStudent = {
        ...action.payload,
        birthday: new Date(action.payload.birthday).toISOString(),
        id: uuidv4(),
      };
      return [...state, newStudent];
    }
    case EDIT_ENTRY: {
      console.log(action.payload);
      const {entry, id} = action.payload;
      const updatedStudent = {
        ...entry,
        birthday: new Date(entry.birthday).toISOString(),
      };
      return state.map(student => {
        if (student.id === id) {
          return {...updatedStudent, id};
        }
        return student;
      });
    }
    default:
      return state;
  }
};

// const handleSubmitRow = row => {
//
//   };

//   const handleEditRow = row => {

//     this.handleCloseModal();
//   };
