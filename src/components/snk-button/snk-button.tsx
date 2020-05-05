import * as React from 'react';
import './snk-button.scss';
import { ISnkButtonProps } from './snk-button.types';
import SnkLoading from '../snk-loading/snk-loading';

const BASE_CLASSNAME = 'snk-button';

const LibButton = (props: ISnkButtonProps) => {
  const {
    children,
    onClick,
    isDisabled = false,
    isLoading = false
  } = props;

  return (
    <div className={`${BASE_CLASSNAME}__wrapper`}>
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
      <div className={
        `${BASE_CLASSNAME}__loading ${BASE_CLASSNAME}__loading--${isLoading ? 'show' : 'hide'}`
      }>
        <SnkLoading />
      </div>
    </div>
  )
}

export default LibButton;