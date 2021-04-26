import React from 'react';
import classes from './App.module.css';
import Grid from '../Grid';

interface AppProps {}

function App({}: AppProps) {
  return (
    <div className={classes.App}>
      <header className={classes.Header}>
        <div className={classes.Counter}>050</div>
        <div className={classes.Face}>:)</div>
        <div className={classes.Counter}>010</div>
      </header>
      <section className={classes.Body}>
        <Grid />
      </section>
    </div>
  );
}

export default App;
