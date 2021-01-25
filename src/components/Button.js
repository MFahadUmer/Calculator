import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  wide, color, value, handleClick,
}) => (
  <button style={{ backgroundColor: `${color}` }} className={(wide && value === '0') ? 'width50 button' : 'width25 button'} type="submit" onClick={handleClick}>
    {value}
  </button>
);

Button.propTypes = {
  value: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  color: PropTypes.string,
  wide: PropTypes.bool,
};

Button.defaultProps = {
  handleClick: '',
  color: 'orange',
  wide: false,
};
export default Button;
