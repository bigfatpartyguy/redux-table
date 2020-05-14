import {connect} from 'react-redux';
import Pagination from './Pagination';
import {setRowsPerPage} from '../../features/rowsPerPage';
import {resetPage} from '../../features/page';

const mapStateToProps = (state, ownProps) => ({
  value: state.rowsPerPage,
  page: state.page,
  pages: Math.ceil(state.students.length / state.rowsPerPage),
  ...ownProps,
});

const mapDispatchToProps = dispatch => ({
  handleNextClick: () => {},
  handlePrevClick: () => {},
  handlePageClick: () => {},
  onChange: event => {
    dispatch(resetPage());
    dispatch(setRowsPerPage(+event.target.value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
