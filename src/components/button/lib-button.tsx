import * as React from 'react';
import './lib-button.scss';
import { ILibButtomProps } from './lib-button.types';

const BASE_CLASSNAME = 'lib-button';

const LibButton = (props: ILibButtomProps) => {
  const { children, onCLick, isDisabled = false, isLoading = false } = props;
  return (
    <button
      data-testid="lib-button"
      className={
        `${BASE_CLASSNAME} ${BASE_CLASSNAME}--${isLoading ? 'is-loading' : 'is-not-loading'}`
      }
      disabled={isDisabled}
      onClick={onCLick}
    >
      {children}
    </button>
  )
}

export default LibButton