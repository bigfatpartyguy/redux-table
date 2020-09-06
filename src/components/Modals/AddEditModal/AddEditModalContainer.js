import {connect} from 'react-redux';
import {addEntry, editEntry, closeModal} from 'features/students';
import AddEditModal from './AddEditModal';
import {getStudentById} from '../../../features/helpers';

const mapStateToProps = (state, ownProps) => ({
  isOpen: state.studentsData.modals.add || state.studentsData.modals.edit,
  type: state.studentsData.modals.add && 'add',
  id: state.studentsData.rowId,
  currentValues:
    state.studentsData.modals.edit &&
    getStudentById(state.studentsData.data, state.studentsData.rowId),
  ...ownProps,
});

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal()),
  handleAddRow: row => {
    dispatch(addEntry(row));
    dispatch(closeModal());
  },
  handleEditRow: (id, row) => {
    dispatch(editEntry(id, row));
    dispatch(closeModal());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddEditModal);
