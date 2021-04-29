import React, { useState } from 'react';
import Counter from './Counter';

import { NUM_OF_MINES } from '../../constants';
import classes from './Header.module.css';
import { FaceEnum } from '../../types';
import Face from '../Face';

interface HeaderProps {}

function Header({}: HeaderProps) {
  const [numOfMines, setNumOfMines] = useState(NUM_OF_MINES);
  const [timeCount, setTimeCount] = useState(0);
  const [face, setFace] = useState(FaceEnum.smile);
  return (
    <header className={classes.Header}>
      <Counter count={String(numOfMines).padStart(3, '0')} />
      <Face face={face} />
      <Counter count={String(timeCount).padStart(3, '0')} />
    </header>
  );
}

export default Header;
