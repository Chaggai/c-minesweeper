import React, { useState } from 'react';

import classes from './GridTile.module.css';
import type { Mine } from '../../../types';

interface GridTileProps {
  row: number;
  col: number;
  mineTiles: Mine[];
}

function GridTile({ row, col, mineTiles }: GridTileProps) {
  const [flag, setFlag] = useState(false);
  console.log(mineTiles);

  const isMine = mineTiles.some(
    (mineTile) => mineTile.row === row && mineTile.col === col,
  );

  const handleOncontextmenu = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    e.preventDefault();
    setFlag(!flag);
  };

  return (
    <div
      className={[`${classes.GridTile}`].toString()}
      onContextMenu={handleOncontextmenu}
    >
      {flag && '🚩'}
      {row}_{col}
      {isMine && '*'}
    </div>
  );
}

export default GridTile;
