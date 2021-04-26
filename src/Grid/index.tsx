import React from 'react';
import classes from './Grid.module.css';
import Tile from '../Tile';

interface GridProps {}

const generateTiles = () => {
  let i = 0;
  let tiles = [];
  while (i < 81) {
    i++;
    tiles.push(<Tile key={i} />);
  }
  return tiles;
};

function Grid({}: GridProps) {
  return <div className={classes.Grid}>{generateTiles()}</div>;
}

export default Grid;
