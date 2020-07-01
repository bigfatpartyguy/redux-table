import React from 'react';
import Table from '../Table';
import LoginPage from '../LoginPage';
import Registration from '../RegistrationPage';
import {columns} from '../../Data';
import classes from './App.module.css';

const App = () => (
  <div className={classes.container}>
    {/* <Registration /> */}
    {/* <LoginPage /> */}
    <Table columns={columns} />
  </div>
);

export default App;
