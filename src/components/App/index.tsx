import React from 'react';

// Styles
import classes from './App.module.css';

// Components
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
