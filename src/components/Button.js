import React from 'react';
import PropTypes from 'prop-types';

// function Button({ name }) {
//   return (<h2>{name}</h2>);
// }

const Button = ({ value }) => (
  // <button className="button" type="submit">
  <button className={value === '=' ? 'equalButton' : 'button'} type="submit">
    {value}
  </button>
);

Button.propTypes = {
  value: PropTypes.string.isRequired,
};
export default Button;
