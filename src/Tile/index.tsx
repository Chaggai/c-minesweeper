import React from 'react';
import classes from './Tile.module.css';

interface TileProps {}

function Tile({}: TileProps) {
  return <div className={classes.Tile}></div>;
}

export default Tile;
