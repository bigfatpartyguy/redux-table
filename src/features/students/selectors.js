import {useSelector} from 'react-redux';

const useStudentsValue = () => useSelector(state => state.students);

export default useStudentsValue;
