import React, { useState } from 'react';

import classes from './GridTile.module.css';
import type { Mine } from '../../../types';

interface GridTileProps {
  row: number;
  col: number;
}

function GridTile({}: GridTileProps) {
  return <div className={classes.GridTile}></div>;
}

export default GridTile;
