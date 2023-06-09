import React from 'react';
import PropTypes from 'prop-types';

export default function Title(props) {
  const {
    className = '',
    children,
  } = props;
  return (
    <div>
      <h1 className={`${className}`}>
        { children }
      </h1>
    </div>
  );
}

Title.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Title.defaultProps = {
  className: '',
};
