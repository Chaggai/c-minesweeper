import { NUM_OF_MINES, NUM_OF_COLS, NUM_OF_ROWS } from './constants';
import type { Mine } from './types';

export const randomlySetMines = (): Mine[] => {
  const mines: Mine[] = [];

  let i = 0;
  while (i < NUM_OF_MINES) {
    const row = Math.floor(Math.random() * NUM_OF_ROWS + 1);
    const col = Math.floor(Math.random() * NUM_OF_COLS + 1);

    const currentMine: Mine = {
      row,
      col,
    };

    if (mines.some((mine) => mine.row === row && mine.col === col)) {
      continue;
    }
    i++;
    mines.push(currentMine);
  }

  return mines;
};
