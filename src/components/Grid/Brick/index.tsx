import React from 'react';

// Styles
import classes from './Brick.module.css';

interface BrickProps {}

function Brick({}: BrickProps) {
  return <div className={classes.Brick}></div>;
}

export default Brick;
