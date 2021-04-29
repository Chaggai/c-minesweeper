import React from 'react';
import type { Brick } from '../types';
import BrickTile from '../components/Grid/BrickTile';

export const useBrickBuilder = ({ row, col, value, state, isAMine }: Brick) => {
  return (
    <BrickTile
      row={row}
      col={col}
      value={value}
      state={state}
      isAMine={isAMine}
      key={`${row}_${col}`}
    />
  );
};
