import { NUM_OF_COLS, NUM_OF_ROWS } from '../constants';
import { Brick, BrickValue, BrickState } from '../types';
import { useBrickBuilder } from './useBrickBuilder';

export const useCreateGrid = (): Brick[] => {
  let bricks: Brick[] = [];
  for (let row = 0; row < NUM_OF_ROWS; row++) {
    for (let col = 0; col < NUM_OF_COLS; col++) {
      let brick: any = useBrickBuilder({ row, col, value: BrickValue.none, state: BrickState.active, isAMine: false });
      bricks.push(brick);
    }
  }
  return bricks;
}
