import React from 'react';

// Styles
import classes from './Brick.module.css';

interface BrickProps {}

const Brick: React.FC<BrickProps> = () => {
  return <div className={classes.Brick}></div>;
};

export default Brick;
