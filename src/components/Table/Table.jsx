import React from 'react';
import PropTypes from 'prop-types';
import TableHeaderCell from '../TableHeaderCell';
import Button from '../Button';
import PaginationContainer from '../Pagination';
import DeleteModalContainer from '../Modals/DeleteModal';
import AddEditModalContainer from '../Modals/AddEditModal';
import {getDateMask} from '../../features/helpers';
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
    handleSort,
  } = props;

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

export default Table;

Table.propTypes = {
  students: PropTypes.arrayOf(
    PropTypes.shape({
      firstName: PropTypes.string,
      secondName: PropTypes.string,
      birthday: PropTypes.string,
    })
  ),
  rowsPerPage: PropTypes.number,
  page: PropTypes.number,
  studentId: PropTypes.string,
  sortFieldName: PropTypes.string,
  sortDirectionAsc: PropTypes.bool,
  openDeleteModal: PropTypes.func,
  openEditModal: PropTypes.func,
  openNewEntryModal: PropTypes.func,
  handleSort: PropTypes.func,
};

Table.defaultProps = {
  students: [
    {
      firstName: 'John',
      secondName: 'Doe',
      birthday: 1900,
    },
  ],
  rowsPerPage: 4,
  page: 1,
  studentId: '',
  sortFieldName: '',
  sortDirectionAsc: true,
  openDeleteModal: () => {},
  openEditModal: () => {},
  openNewEntryModal: () => {},
  handleSort: () => {},
};
