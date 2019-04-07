import React from 'react';

const Container = ({ rootClass, className, children }) => {
    return (
      <div className={`${rootClass} ${className || ''}`}>
        { children }
      </div>
    );
  }

export default Container