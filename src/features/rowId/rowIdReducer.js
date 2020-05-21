import {SET_ROW_ID} from './actionTypes';

export default (state = null, action) => {
  switch (action.type) {
    case SET_ROW_ID:
      return action.payload;
    default:
      return state;
  }
};
