import React from 'react';
import Button from './Button';

const ButtonPanel = () => {
  const buttonGroups = {
    groupOne: {
      id: 1,
      group: ['AC', '+/-', 'DEL', '%'],
    },
    groupTwo: {
      id: 2,
      group: ['7', '8', '9', '/'],
    },
    groupThree: {
      id: 3,
      group: ['4', '5', '6', 'X'],
    },
    groupFour: {
      id: 4,
      group: ['1', '2', '3', '-'],
    },
    groupFive: {
      id: 5,
      group: ['0', '.', '=', '+'],
    },
  };

  return (
    <div>
      <div className="buttonPanel">
        {buttonGroups.groupOne.group.map(button => (
          <Button value={button} key={button} />
        ))}
      </div>
      <div className="buttonPanel">
        {buttonGroups.groupTwo.group.map(button => (
          <Button value={button} key={button} />
        ))}
      </div>
      <div className="buttonPanel">
        {buttonGroups.groupThree.group.map(button => (
          <Button value={button} key={button} />
        ))}
      </div>
      <div className="buttonPanel">
        {buttonGroups.groupFour.group.map(button => (
          <Button value={button} key={button} />
        ))}
      </div>
      <div className="buttonPanel">
        {buttonGroups.groupFive.group.map(button => (
          <Button value={button} key={button} />
        ))}
      </div>
    </div>
  );
};

export default ButtonPanel;
