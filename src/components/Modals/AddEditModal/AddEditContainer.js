import {connect} from 'react-redux';

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
