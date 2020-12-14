import React from 'react';
import PropTypes from 'prop-types';

// function Button({ name }) {
//   return (<h2>{name}</h2>);
// }

const Button = ({ name, age }) => (
  <h2>
    {name}
    {age}
  </h2>
);

Button.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired,
};
Button.defaultProps = {
  name: '',
};
export default Button;
