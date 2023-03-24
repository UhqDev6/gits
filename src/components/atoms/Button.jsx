import PropTypes from 'prop-types';
import React from 'react';

function Button(props) {
  const {
    type, children, className, loading, onClick, disabled,
  } = props;
  return (
    <button
      className={`${className}`}
      type={type === 'submit' ? 'submit' : 'button'}
      onClick={onClick}
      disabled={disabled}
    >
      { loading ? '...' : children }
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
  loading: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  children: '',
  className: '',
  loading: false,
  disabled: false,
};

export default Button;
