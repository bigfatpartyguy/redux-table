/* eslint-disable no-shadow */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
  openDeleteModal,
  openEditModal,
  openNewEntryModal,
} from 'features/openedModals';
import {setStudentId} from 'features/studentId';
import TableHeaderCell from '../TableHeaderCell';
import Button from '../Button';
import PaginationContainer from '../Pagination';
import DeleteModalContainer from '../Modals/DeleteModal';
import AddEditModalContainer from '../Modals/AddEditModal';
import {sortRows, getStudentById, getDateMask} from '../../features/helpers';
import styles from './Table.module.css';

const Table = props => {
  const {
    students,
    rowsPerPage,
    page,
    studentId,
    sortFieldName,
    sortDirectionAsc,
    openDeleteModal,
    openEditModal,
    openNewEntryModal,
  } = props;

  // this function doesn't work
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
                onClick={() => openDeleteModal(id)}
                btnRole="danger"
              />
              <Button
                text="Edit"
                onClick={() => openEditModal(id)}
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
          onClick={openNewEntryModal}
        />
      </div>
      <PaginationContainer selectOptions={[2, 4, 6]} />
      <DeleteModalContainer id={studentId} />
      <AddEditModalContainer />
    </div>
  );
};

const mapStateToProps = state => ({
  students: state.students,
  rowsPerPage: state.rowsPerPage,
  page: state.page,
  openedModals: state.openedModals,
  studentId: state.studentId,
  sortFieldName: state.sortFieldName,
  sortDirectionAsc: state.sortDirectionAsc,
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
});

const TableContainer = connect(mapStateToProps, mapDispatchToProps)(Table);

export default TableContainer;
