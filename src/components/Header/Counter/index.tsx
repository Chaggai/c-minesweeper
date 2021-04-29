import React from 'react';

import classes from './Counter.module.css';

interface CounterProps {
  count: string;
}

function Counter({ count }: CounterProps) {
  return <div className={classes.Counter}>{count}</div>;
}

export default Counter;
