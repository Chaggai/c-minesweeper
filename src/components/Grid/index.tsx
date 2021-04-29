import React from 'react';

import { NUM_OF_ROWS, NUM_OF_COLS } from '../../constants';
import { randomlySetMines } from '../../utils';
import classes from './Grid.module.css';
import GridTile from './GridTile';

interface GridProps {}

const generateTiles = () => {
  const tiles: JSX.Element[] = [];
  for (let row = 1; row <= NUM_OF_ROWS; row++) {
    for (let col = 1; col <= NUM_OF_COLS; col++) {
      tiles.push(<GridTile key={`${row}_${col}`} row={row} col={col} />);
    }
  }
  return tiles;
};

function Grid({}: GridProps) {
  return (
    <div
      className={classes.Grid}
      style={{
        // Set css grid from constants
        gridTemplateRows: `repeat(${NUM_OF_ROWS}, 1fr)`,
        gridTemplateColumns: `repeat(${NUM_OF_COLS}, 1fr)`,
      }}
    >
      {generateTiles()}
    </div>
  );
}

export default Grid;
