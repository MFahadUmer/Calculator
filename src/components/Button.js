import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ value }) => (
  <button className={value === '=' ? 'equalButton' : 'button'} type="submit">
    {value}
  </button>
);

Button.propTypes = {
  value: PropTypes.string.isRequired,
};
export default Button;
