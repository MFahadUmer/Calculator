import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ value, handleClick }) => (
  <button className="button" type="submit" onClick={handleClick}>
    {value}
  </button>
);

Button.propTypes = {
  value: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};

Button.defaultProps = {
  handleClick: '',
};
export default Button;
