/* eslint-disable no-shadow */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable react/prop-types */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {v4 as uuidv4} from 'uuid';
import TableHeaderCell from '../TableHeaderCell';
import Button from '../Button';
import PaginationContainer from '../Pagination';
import DeleteModal from '../CommonModal/Modals/DeleteModal';
import AddEditModal from '../CommonModal/Modals/AddEditModal';
import {sortRows, getStudentById, getDateMask} from '../../features/helpers';
import styles from './Table.module.css';

const Table = props => {
  const {
    students,
    rowsPerPage,
    page,
    openedModals,
    studentId,
    sortFieldName,
    sortDirectionAsc,
  } = props;
  console.log(props);
  const handleDeleteClick = () => {
    this.setState(state => {
      const students = state.students.filter(row => row.id !== state.studentId);
      return {
        students,
      };
    });
    this.handleCloseModal();
  };

  const handleSubmitRow = row => {
    const newStudent = {...row};
    const {firstName, secondName, birthday} = newStudent;
    if (!firstName || !secondName || !birthday) {
      // eslint-disable-next-line no-undef, no-alert
      alert('Please, fill in the input fields.');
      return;
    }
    newStudent.birthday = new Date(birthday).toISOString();
    newStudent.id = uuidv4();
    this.setState(state => ({students: [...state.students, newStudent]}));
    this.handleCloseModal();
  };

  const handleEditRow = row => {
    const updatedStudent = {...row};
    const {firstName, secondName, birthday} = updatedStudent;
    if (!firstName || !secondName || !birthday) {
      // eslint-disable-next-line no-undef, no-alert
      alert('Please, fill in the input fields.');
      return;
    }
    updatedStudent.birthday = new Date(birthday).toISOString();
    this.setState(state => {
      const students = state.students.map(student => {
        if (student.id === state.studentId) {
          return {...updatedStudent, id: state.studentId};
        }
        return student;
      });
      return {students};
    });
    this.handleCloseModal();
  };

  const handleOpenDeleteModal = id => {
    this.setState(state => {
      const openedModals = {...state.openedModals};
      openedModals.delete = true;
      return {
        openedModals,
        studentId: id,
      };
    });
  };

  const handleOpenAddModal = () => {
    this.setState(state => {
      const openedModals = {...state.openedModals};
      openedModals.add = true;
      return {
        openedModals,
      };
    });
  };

  const handleOpenEditModal = id => {
    this.setState(state => {
      const openedModals = {...state.openedModals};
      openedModals.edit = true;
      return {
        openedModals,
        studentId: id,
      };
    });
  };

  const handleCloseModal = () => {
    this.setState(state => {
      const openedModals = {...state.openedModals};
      Object.keys(openedModals).forEach(key => {
        openedModals[key] = false;
      });
      return {openedModals};
    });
  };

  const handleSort = value => {
    this.setState(state => {
      let {sortFieldName, sortDirectionAsc} = state;
      if (sortFieldName === value) {
        sortDirectionAsc = !sortDirectionAsc;
      } else {
        sortFieldName = value;
        sortDirectionAsc = true;
      }
      const students = sortRows(
        state.students,
        sortFieldName,
        sortDirectionAsc
      );
      return {
        sortFieldName,
        sortDirectionAsc,
        students,
      };
    });
  };

  const renderTableRows = () => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const pageToDisplay = students
      .map(row => {
        const {id} = row;
        return (
          <tr key={id}>
            <td>{row.firstName}</td>
            <td>{row.secondName}</td>
            <td>{getDateMask(row.birthday)}</td>
            <td>{row.email}</td>
            <td>
              <Button
                text="Delete"
                onClick={() => handleOpenDeleteModal(id)}
                btnRole="danger"
              />
              <Button
                text="Edit"
                onClick={() => handleOpenEditModal(id)}
                btnRole="edit"
              />
            </td>
          </tr>
        );
      })
      .slice(start, end);
    const emptyRows = Array(rowsPerPage - pageToDisplay.length)
      .fill(null)
      .map((empty, ind) => {
        const key = ind;
        return (
          <tr key={key} className={styles.emptyRow}>
            <td colSpan="4">&nbsp;</td>
          </tr>
        );
      });

    return pageToDisplay.concat(emptyRows);
  };

  return (
    <div>
      <table className={styles.main}>
        <thead>
          <tr>
            <TableHeaderCell
              value="firstName"
              sortFieldName={sortFieldName}
              sortDirectionAsc={sortDirectionAsc}
              onClick={handleSort}>
              First Name
            </TableHeaderCell>
            <TableHeaderCell
              value="secondName"
              sortFieldName={sortFieldName}
              sortDirectionAsc={sortDirectionAsc}
              onClick={handleSort}>
              Second Name
            </TableHeaderCell>
            <TableHeaderCell
              value="birthday"
              sortFieldName={sortFieldName}
              sortDirectionAsc={sortDirectionAsc}
              onClick={handleSort}>
              Date of birth
            </TableHeaderCell>
            <TableHeaderCell
              value="email"
              sortFieldName={sortFieldName}
              sortDirectionAsc={sortDirectionAsc}
              onClick={handleSort}>
              Email
            </TableHeaderCell>
            <th>Controls</th>
          </tr>
        </thead>
        <tbody>{renderTableRows()}</tbody>
      </table>
      <div className={styles.newEntryRow}>
        <Button
          text="Add new entry"
          btnRole="submit"
          onClick={handleOpenAddModal}
        />
      </div>
      <PaginationContainer selectOptions={[2, 4, 6]} />
      <DeleteModal
        isOpen={openedModals.delete}
        handleCloseModal={handleCloseModal}
        handleDeleteClick={handleDeleteClick}
      />
      <AddEditModal
        type={openedModals.add && 'add'}
        isOpen={openedModals.add || openedModals.edit}
        handleCloseModal={handleCloseModal}
        handleAddRow={handleSubmitRow}
        handleEditRow={handleEditRow}
        currentValues={openedModals.edit && getStudentById(students, studentId)}
      />
    </div>
  );
};

export default Table;
