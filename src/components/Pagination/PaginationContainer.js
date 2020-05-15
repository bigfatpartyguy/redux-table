import {connect} from 'react-redux';
import {
  resetPage,
  setPage,
  nextPage,
  prevPage,
  setRowsPerPage,
} from 'features/pagination';
import Pagination from './Pagination';

const mapStateToProps = (state, ownProps) => ({
  value: state.pagination.rowsPerPage,
  page: state.pagination.page,
  pages: Math.ceil(
    state.studentsData.students.length / state.pagination.rowsPerPage
  ),
  ...ownProps,
});

const mapDispatchToProps = dispatch => ({
  handleNextClick: () => dispatch(nextPage()),
  handlePrevClick: () => dispatch(prevPage()),
  handlePageClick: event => {
    dispatch(setPage(+event.target.value));
  },
  onChange: event => {
    dispatch(resetPage());
    dispatch(setRowsPerPage(+event.target.value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
