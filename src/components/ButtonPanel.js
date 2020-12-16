import React from 'react';
import Button from './Button';

const ButtonPanel = () => {
  const symbols = ['AC', '+/-', '%', '/', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '0', '='];
  // eslint-disable-next-line react/no-array-index-key
  const calculatorSymbols = symbols.map((x, idx) => <Button key={idx} value={x} />);
  return (
    <div className="buttonPanel">
      {calculatorSymbols}
    </div>
  );
};

export default ButtonPanel;
