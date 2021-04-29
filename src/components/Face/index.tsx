import React from 'react';

import classes from './Face.module.css';

interface FaceProps {
  face: string;
}

function Face({ face }: FaceProps) {
  return <div className={classes.Face}>{face}</div>;
}

export default Face;
