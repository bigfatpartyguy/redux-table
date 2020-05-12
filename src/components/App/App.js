import React from 'react';
import Table from '../Table';
import students from '../../Data';
import classes from './App.module.css';

const App = () => (
  <div className={classes.container}>
    <Table data={students} />
  </div>
);

export default App;
