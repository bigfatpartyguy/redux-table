import {connect} from 'react-redux';
import {deleteEntry, closeModal} from 'features/studentsData';
import DeleteModal from './DeleteModal';

const mapStateToProps = (state, ownProps) => ({
  isOpen: state.studentsData.modals.delete,
  ...ownProps,
});

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal()),
  handleDeleteClick: id => {
    dispatch(deleteEntry(id));
    dispatch(closeModal());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteModal);
