import data from '../../Data';
import {sortRows} from '../helpers';
import {DELETE_ENTRY} from './actionTypes';

const initialState = sortRows(data, Object.keys(data[0])[0], true);

export default (state = initialState, action) => {
  switch (action.type) {
    case DELETE_ENTRY:
      return state.filter(entry => entry.id !== action.payload);
    default:
      return state;
  }
};
