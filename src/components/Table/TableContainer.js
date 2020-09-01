import {connect} from 'react-redux';
import {
  sortEntries,
  setRowId,
  openDeleteModal,
  openEditModal,
  openNewEntryModal,
  fetchStudents,
} from 'features/students';

import Table from './Table';

const mapStateToProps = (state, ownProps) => ({
  ...state.studentsData,
  ...ownProps,
});

const mapDispatchToProps = dispatch => ({
  openNewEntryModal: () => dispatch(openNewEntryModal()),
  fetchStudents: (...params) => dispatch(fetchStudents(...params)),
  openEditModal: id => {
    dispatch(setRowId(id));
    dispatch(openEditModal(id));
  },
  openDeleteModal: id => {
    dispatch(setRowId(id));
    dispatch(openDeleteModal());
  },
  handleSort: fieldName => dispatch(sortEntries(fieldName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
