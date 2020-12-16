import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ calulate }) => (
  <div className="display">
    <p className="calculateText">{ calulate }</p>
  </div>
);

Display.propTypes = {
  calulate: PropTypes.string,
};

Display.defaultProps = {
  calulate: '0',
};

export default Display;
