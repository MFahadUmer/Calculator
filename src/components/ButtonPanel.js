import React from 'react';
import Button from './Button';

const ButtonPanel = () => {
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
      group: ['0', '.', '='],
    },
  };

  return (
    <div>
      <div className="buttonPanel">
        {buttonGroups.groupOne.group.map(button => (
          <Button value={button} key={buttonGroups.groupOne.id} />
        ))}
      </div>
      <div className="buttonPanel">
        {buttonGroups.groupTwo.group.map(button => (
          <Button value={button} key={buttonGroups.groupOne.id} />
        ))}
      </div>
      <div className="buttonPanel">
        {buttonGroups.groupThree.group.map(button => (
          <Button value={button} key={buttonGroups.groupOne.id} />
        ))}
      </div>
      <div className="buttonPanel">
        {buttonGroups.groupFour.group.map(button => (
          <Button value={button} key={buttonGroups.groupOne.id} />
        ))}
      </div>
    </div>
  );
};

export default ButtonPanel;
