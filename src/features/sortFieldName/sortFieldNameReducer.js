import data from '../../Data';

const initialState = Object.keys(data[0])[0];

export default (state = initialState, action) => {
  return state;
};
