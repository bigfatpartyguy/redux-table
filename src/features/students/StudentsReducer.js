import data from '../../Data';
import {sortRows} from '../helpers';

const initialState = sortRows(data, Object.keys(data[0])[0], true);

export default (state = initialState, action) => state;
