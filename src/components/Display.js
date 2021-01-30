import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ calculate }) => (
  <div className="display">
    <p className="calculateText">{ calculate }</p>
  </div>
);

Display.propTypes = {
  calculate: PropTypes.string,
};

Display.defaultProps = {
  calculate: '0',
};

export default Display;
