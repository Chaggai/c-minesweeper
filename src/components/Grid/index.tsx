import React from 'react';

// Styles
import classes from './Grid.module.css';

// Constants
import { NUM_OF_ROWS, NUM_OF_COLS } from '../../constants';

// Components
import Brick from './Brick';

interface GridProps {}

const Grid: React.FC<GridProps> = () => {
  return (
    <div
      className={classes.Grid}
      style={{
        // Set css grid from constants
        gridTemplateRows: `repeat(${NUM_OF_ROWS}, 1fr)`,
        gridTemplateColumns: `repeat(${NUM_OF_COLS}, 1fr)`,
      }}
    >
      <Brick />
    </div>
  );
};

export default Grid;
