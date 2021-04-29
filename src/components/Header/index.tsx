import React, { useState } from 'react';

// Styles
import classes from './Header.module.css';

// Constants
import { NUM_OF_MINES } from '../../constants';

// Types
import { FaceEnum } from '../../types';

// Components
import Face from '../Face';
import Counter from './Counter';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
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
};

export default Header;
