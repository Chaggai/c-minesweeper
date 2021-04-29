import React from 'react';

import classes from './App.module.css';
import Grid from '../Grid';
import Header from '../Header';

interface AppProps {}

function App({}: AppProps) {
  return (
    <div className={classes.App}>
      <Header />
      <section className={classes.Body}>
        <Grid />
      </section>
    </div>
  );
}

export default App;
