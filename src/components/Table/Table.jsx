import React from 'react';
import {getDateMask} from '../../helpers';
import {useStudentsValue} from '../../features/students';
import styles from './Table.module.css';

function Table() {
  const students = useStudentsValue();

  const renderTableRows = () => {
    return students.map(row => {
      const {id} = row;
      return (
        <tr key={id}>
          <td>{row.firstName}</td>
          <td>{row.secondName}</td>
          <td>{getDateMask(row.birthday)}</td>
          <td>{row.email}</td>
        </tr>
      );
    });
  };

  return (
    <div>
      <table className={styles.main}>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Second Name</th>
            <th>Date of Birth</th>
            <th>Email</th>
            <th>Controls</th>
          </tr>
        </thead>
        <tbody>{renderTableRows()}</tbody>
      </table>
    </div>
  );
}

export default Table;
