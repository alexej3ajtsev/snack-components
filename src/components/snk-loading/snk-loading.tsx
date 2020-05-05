import React from 'react';
import './snk-loading.scss';

const SnkLoading = () => {
  return (
    <svg className="snk-loading" style={{ width: '4.8rem', height: '1.4rem' }} viewBox="0 0 48 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="7" cy="7" r="7" />
      <circle cx="23.66" cy="7" r="7" />
      <circle cx="40.32" cy="7" r="7" />
    </svg>
  )
}

export default SnkLoading;