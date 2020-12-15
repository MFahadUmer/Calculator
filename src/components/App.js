import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import CalculatorName from './CalculatorName';

const App = () => (
  <div className="calculator">
    <CalculatorName />
    <Display />
    <ButtonPanel />
  </div>
);
export default App;
