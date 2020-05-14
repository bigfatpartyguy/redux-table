import {SET_STUDENT_ID} from './actionTypes';

export default (state = null, action) => {
  switch (action.type) {
    case SET_STUDENT_ID:
      return action.payload;
    default:
      return state;
  }
};
