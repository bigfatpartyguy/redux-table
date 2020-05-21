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
    data,
    sortFieldName,
    sortDirectionAsc,
    handleSort,
    rowId,
    rowsPerPage,
    page,
    openDeleteModal,
    openEditModal,
    openNewEntryModal,
    columns,
  } = props;

  const renderTableRows = () => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const pageToDisplay = data
      .map(row => {
        const {id} = row;
        return (
          <tr key={id}>
            {columns.map(column => (
              <td key={column.key}>
                {column.isDate ? getDateMask(row[column.key]) : row[column.key]}
              </td>
            ))}
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
            <td colSpan={columns.length + 1}>&nbsp;</td>
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
            {columns.map(column => (
              <TableHeaderCell
                key={column.key}
                value={column.key}
                sortFieldName={sortFieldName}
                sortDirectionAsc={sortDirectionAsc}
                onClick={handleSort}>
                {column.title}
              </TableHeaderCell>
            ))}
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
      <DeleteModalContainer id={rowId} />
      <AddEditModalContainer columns={columns} />
    </div>
  );
};

export default Table;

Table.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      firstName: PropTypes.string,
      secondName: PropTypes.string,
      birthday: PropTypes.string,
    })
  ),
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      key: PropTypes.string,
      isDate: PropTypes.bool,
    })
  ),
  rowsPerPage: PropTypes.number,
  page: PropTypes.number,
  rowId: PropTypes.string,
  sortFieldName: PropTypes.string,
  sortDirectionAsc: PropTypes.bool,
  openDeleteModal: PropTypes.func,
  openEditModal: PropTypes.func,
  openNewEntryModal: PropTypes.func,
  handleSort: PropTypes.func,
};

Table.defaultProps = {
  data: [
    {
      firstName: 'John',
      secondName: 'Doe',
      birthday: 1900,
    },
  ],
  columns: [
    {
      title: 'First Name',
      key: 'firstName',
    },
    {
      title: 'Second Name',
      key: 'secondName',
    },
    {
      title: 'Date of birth',
      key: 'birthday',
    },
  ],
  rowsPerPage: 4,
  page: 1,
  rowId: '',
  sortFieldName: '',
  sortDirectionAsc: true,
  openDeleteModal: () => {},
  openEditModal: () => {},
  openNewEntryModal: () => {},
  handleSort: () => {},
};
