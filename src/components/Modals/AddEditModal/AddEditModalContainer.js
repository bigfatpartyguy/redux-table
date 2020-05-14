import {connect} from 'react-redux';
import {closeModal} from 'features/openedModals';
import AddEditModal from './AddEditModal';
import {getStudentById} from '../../../features/helpers';

// const handleSubmitRow = row => {
//     const newStudent = {...row};
//     const {firstName, secondName, birthday} = newStudent;
//     if (!firstName || !secondName || !birthday) {
//       // eslint-disable-next-line no-undef, no-alert
//       alert('Please, fill in the input fields.');
//       return;
//     }
//     newStudent.birthday = new Date(birthday).toISOString();
//     newStudent.id = uuidv4();
//     this.setState(state => ({students: [...state.students, newStudent]}));
//     this.handleCloseModal();
//   };

//   const handleEditRow = row => {
//     const updatedStudent = {...row};
//     const {firstName, secondName, birthday} = updatedStudent;
//     if (!firstName || !secondName || !birthday) {
//       // eslint-disable-next-line no-undef, no-alert
//       alert('Please, fill in the input fields.');
//       return;
//     }
//     updatedStudent.birthday = new Date(birthday).toISOString();
//     this.setState(state => {
//       const students = state.students.map(student => {
//         if (student.id === state.studentId) {
//           return {...updatedStudent, id: state.studentId};
//         }
//         return student;
//       });
//       return {students};
//     });
//     this.handleCloseModal();
//   };

const mapStateToProps = (state, ownProps) => ({
  isOpen: state.openedModals.add || state.openedModals.edit,
  type: state.openedModals.add && 'add',
  currentValues:
    state.openedModals.edit && getStudentById(state.students, state.studentId),
});

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddEditModal);
