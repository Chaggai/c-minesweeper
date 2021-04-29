import { NUM_OF_COLS, NUM_OF_ROWS } from '../constants';
import { Brick, Mine, BrickValue, BrickState } from '../types';
import { useBrickBuilder } from './useBrickBuilder';

export const useCreateGrid = (): Brick[] => {
  const bricks: Brick[] = [];
  for (let row = 1; row <= NUM_OF_ROWS; row++) {
    for (let col = 1; col <= NUM_OF_COLS; col++) {
      let brick: any = useBrickBuilder({ row, col, value: BrickValue.none, state: BrickState.active, isAMine: false });

      bricks.push(brick);
    }
  }
  return bricks;
}
