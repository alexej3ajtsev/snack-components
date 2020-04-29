import * as React from 'react';
import './lib-button.scss';
import { ILibButtomProps } from './lib-button.types';

const LibButton = (props: ILibButtomProps) => {
  const { children } = props;
  return (
    <button data-testid="lib-button" className="lib-button">
      {children}
    </button>
  )
}

export default LibButton