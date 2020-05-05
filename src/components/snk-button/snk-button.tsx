import * as React from 'react';
import './snk-button.scss';
import { ISnkButtonProps } from './snk-button.types';
import { ThemeContext } from '../snk-theme-provider/snk-theme-provider';

const BASE_CLASSNAME = 'snk-button';

const LibButton = (props: ISnkButtonProps) => {
  const {
    children,
    onClick,
    isDisabled = false,
    isLoading = false
  } = props;

  return (
    <button
      data-testid="snk-button"
      className={
        `${BASE_CLASSNAME} ${BASE_CLASSNAME}--${
        isLoading ? 'is-loading' : 'is-not-loading'
        }`
      }
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default LibButton;