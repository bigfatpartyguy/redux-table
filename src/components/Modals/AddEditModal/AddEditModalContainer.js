import {connect} from 'react-redux';
import {closeModal} from 'features/openedModals';
import {addEntry, editEntry} from 'features/tableData';
import AddEditModal from './AddEditModal';
import {getStudentById} from '../../../features/helpers';

const mapStateToProps = (state, ownProps) => ({
  isOpen: state.openedModals.add || state.openedModals.edit,
  type: state.openedModals.add && 'add',
  id: state.rowId,
  currentValues:
    state.openedModals.edit &&
    getStudentById(state.tableData.data, state.rowId),
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
