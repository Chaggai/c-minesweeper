import React from 'react';

// Styles
import classes from './BrickTile.module.css';

// Types
import type { Brick } from '../../../types';

const BrickTile: React.FC<Brick> = ({
  row,
  col,
  value,
  state,
  isAMine,
}: Brick) => {
  return <div className={classes.BrickTile}></div>;
};

export default BrickTile;
