import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';

const App = () => {
  const dataObject = {
    total: 45,
    next: 56,
    operation: 'X',
  };
  const buttonName = '+/-';
  return (
    <div className="calculator">
      <Display />
      <ButtonPanel calculate={calculate(dataObject, buttonName)} />
    </div>
  );
};
export default App;
