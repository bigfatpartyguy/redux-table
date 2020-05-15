import {connect} from 'react-redux';
import {
  openDeleteModal,
  openEditModal,
  openNewEntryModal,
} from 'features/openedModals';
import {setStudentId} from 'features/studentId';
import {sortEntries} from 'features/students';
import Table from './Table';

const mapStateToProps = state => ({
  ...state.studentsData,
  ...state.openedModals,
  ...state.pagination,
  openedModals: state.openedModals,
  studentId: state.studentId,
});

const mapDispatchToProps = dispatch => ({
  openNewEntryModal: () => dispatch(openNewEntryModal()),
  openEditModal: id => {
    dispatch(setStudentId(id));
    dispatch(openEditModal(id));
  },
  openDeleteModal: id => {
    dispatch(setStudentId(id));
    dispatch(openDeleteModal());
  },
  handleSort: fieldName => dispatch(sortEntries(fieldName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
