import {connect} from 'react-redux';
import {closeModal} from 'features/openedModals';
import {addEntry, editEntry} from 'features/students';
import AddEditModal from './AddEditModal';
import {getStudentById} from '../../../features/helpers';

const mapStateToProps = (state, ownProps) => ({
  isOpen: state.openedModals.add || state.openedModals.edit,
  type: state.openedModals.add && 'add',
  id: state.studentId,
  currentValues:
    state.openedModals.edit && getStudentById(state.students, state.studentId),
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
