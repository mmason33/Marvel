import React from 'react';

/**
 * @function Container - Render DOM wrapper - functional
 * @param {string} rootClass - Root css class
 * @param {string} className - Additional css class
 * @param {object} children - Child Nodes
 */
const Container = ({ rootClass, className, children }) => {
    return (
      <div className={`${rootClass} ${className || ''}`}>
        { children }
      </div>
    );
  }

export default Container