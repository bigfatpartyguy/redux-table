import React from 'react';
import Counter from '../Counter';
import Random from '../Random';
import Table from '../Table';
import classes from './App.module.css';

const App = () => (
  <div className={classes.container}>
    <div className={classes.defaultComponents}>
      <Counter />
      <Random />
    </div>
    <Table />
  </div>
);

export default App;
