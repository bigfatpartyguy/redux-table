import {connect} from 'react-redux';
import {
  resetPage,
  setPage,
  nextPage,
  prevPage,
  setRowsPerPage,
} from 'features/studentsData';
import Pagination from './Pagination';

const mapStateToProps = (state, ownProps) => ({
  value: state.studentsData.rowsPerPage,
  page: state.studentsData.page,
  pages: Math.ceil(
    state.studentsData.data.length / state.studentsData.rowsPerPage
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
