import React from 'react';
import Table from '../Table';
import {columns} from '../../Data';
import classes from './App.module.css';

const App = () => (
  <div className={classes.container}>
    <Table columns={columns} />
  </div>
);

export default App;
