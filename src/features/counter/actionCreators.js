import {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import useCountValue from './selectors';
import {INCREMENT_COUNTER, DECREMENT_COUNTER} from './actionTypes';

const useActions = () => {
  const dispatch = useDispatch();
  const count = useCountValue();
  const incrementCounter = useCallback(() => {
    dispatch({
      type: INCREMENT_COUNTER,
      value: count + 1,
    });
  }, [count, dispatch]);
  const decrementCounter = useCallback(() => {
    dispatch({
      type: DECREMENT_COUNTER,
      value: count - 1,
    });
  }, [count, dispatch]);
  return {incrementCounter, decrementCounter};
};

export default useActions;
