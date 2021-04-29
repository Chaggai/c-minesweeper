export enum FaceEnum {
  smile = '😀',
  oh = '😲',
  lost = '😣',
  won = '🤩',
}

export enum BrickValue {
  none,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  mine,
}

export enum BrickState {
  active,
  opened,
  flagged,
}

export type Brick = { value: BrickValue; state: BrickState, row: number, col: number, isAMine: boolean };
export type Mine = { row: number, col: number };
