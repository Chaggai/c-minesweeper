import React from 'react';

// Styles
import classes from './Counter.module.css';

interface CounterProps {
  count: string;
}

const Counter: React.FC<CounterProps> = ({ count }) => {
  return <div className={classes.Counter}>{count}</div>;
};

export default Counter;
