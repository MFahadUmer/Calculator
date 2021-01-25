import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = ({ clickHandler }) => {
  const buttonGroups = {
    groupOne: {
      id: 1,
      group: ['AC', '+/-', '%', '/'],
    },
    groupTwo: {
      id: 2,
      group: ['7', '8', '9', 'X'],
    },
    groupThree: {
      id: 3,
      group: ['4', '5', '6', '-'],
    },
    groupFour: {
      id: 4,
      group: ['1', '2', '3', '+'],
    },
    groupFive: {
      id: 5,
      group: ['0', '.', '='],
    },
  };

  return (
    <div>
      <div className="buttonPanel">
        {buttonGroups.groupOne.group.map(button => (
          <Button
            value={button}
            key={button}
            handleClick={() => clickHandler(button)}
          />
        ))}
      </div>
      <div className="buttonPanel">
        {buttonGroups.groupTwo.group.map(button => (
          <Button value={button} key={button} handleClick={() => clickHandler(button)} />
        ))}
      </div>
      <div className="buttonPanel">
        {buttonGroups.groupThree.group.map(button => (
          <Button value={button} key={button} handleClick={() => clickHandler(button)} />
        ))}
      </div>
      <div className="buttonPanel">
        {buttonGroups.groupFour.group.map(button => (
          <Button value={button} key={button} handleClick={() => clickHandler(button)} />
        ))}
      </div>
      <div className="buttonPanel">
        {buttonGroups.groupFive.group.map(button => (
          <Button
            wide
            value={button}
            key={button}
            handleClick={() => clickHandler(button)}
          />
        ))}
      </div>
    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func,
};

ButtonPanel.defaultProps = {
  clickHandler: '',
};

export default ButtonPanel;
