import React from 'react';
import type { Brick, Mine } from '../types';
import BrickTile from '../components/Grid/BrickTile';
import { useCreateMines } from './useCreatMines';

const mines: Mine[] = useCreateMines();

export const useBrickBuilder = ({ row, col, value, state, isAMine }: Brick) => {
  isAMine = mines.some((mine) => mine.row === row && mine.col === col);
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
