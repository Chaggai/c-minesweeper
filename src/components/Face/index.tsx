import React from 'react';

// Styles
import classes from './Face.module.css';

interface FaceProps {
  face: string;
}

const Face: React.FC<FaceProps> = ({ face }) => {
  return <div className={classes.Face}>{face}</div>;
};

export default Face;
