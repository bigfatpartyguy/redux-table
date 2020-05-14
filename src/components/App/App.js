import React from 'react';
import {connect} from 'react-redux';
import Table from '../Table';
import students from '../../Data';
import classes from './App.module.css';

const mapStateToProps = state => {
  return {
    students: state.students,
    rowsPerPage: state.rowsPerPage,
    page: state.page,
    openedModals: state.openedModals,
    studentId: state.studentId,
    sortFieldName: state.sortFieldName,
    sortDirectionAsc: state.sortDirectionAsc,
  };
};

const TableContainer = connect(mapStateToProps)(Table);

const App = () => (
  <div className={classes.container}>
    <TableContainer />
  </div>
);

export default App;
