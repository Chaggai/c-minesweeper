import React from 'react';

// Styles
import classes from './Grid.module.css';

// Constants
import { NUM_OF_ROWS, NUM_OF_COLS } from '../../constants';

// Components
import BrickTile from './BrickTile';

// Custom Hooks
import { useCreateGrid } from '../../hooks/useCreateGrid';

// Types
import type { Brick } from '../../types';

interface GridProps {}

const Grid: React.FC<GridProps> = () => {
  const bricks: Brick[] = useCreateGrid();
  return (
    <div
      className={classes.Grid}
      style={{
        // Set css grid from constants
        gridTemplateRows: `repeat(${NUM_OF_ROWS}, 1fr)`,
        gridTemplateColumns: `repeat(${NUM_OF_COLS}, 1fr)`,
      }}
    >
      {bricks}
    </div>
  );
};

export default Grid;
