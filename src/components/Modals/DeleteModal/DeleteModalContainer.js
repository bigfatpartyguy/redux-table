import {connect} from 'react-redux';
import DeleteModal from './DeleteModal';

const mapStateToProps = (state, ownProps) => ({
  isOpen: state.openedModals.delete,
  ...ownProps,
});

// const handleCloseModal = () => {
//     this.setState(state => {
//       const openedModals = {...state.openedModals};
//       Object.keys(openedModals).forEach(key => {
//         openedModals[key] = false;
//       });
//       return {openedModals};
//     });
//   };

//   const handleDeleteClick = () => {
//     this.setState(state => {
//       const students = state.students.filter(row => row.id !== state.studentId);
//       return {
//         students,
//       };
//     });
//     this.handleCloseModal();
//   };

export default connect(mapStateToProps)(DeleteModal);
