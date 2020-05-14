import {connect} from 'react-redux';
import {closeModal} from 'features/openedModals';
import {deleteEntry} from 'features/students';
import DeleteModal from './DeleteModal';

const mapStateToProps = (state, ownProps) => ({
  isOpen: state.openedModals.delete,
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
