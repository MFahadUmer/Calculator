import React, { Component } from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';

class App extends Component {
  constructor() {
    super();
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      total: '',
      // eslint-disable-next-line react/no-unused-state
      next: '',
      // eslint-disable-next-line react/no-unused-state
      operation: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = buttonName => {
    const data = this.state;
    const result = calculate(data, buttonName);
    this.setState({
      // eslint-disable-next-line react/no-unused-state
      total: result.total,
      // eslint-disable-next-line react/no-unused-state
      next: result.next,
      // eslint-disable-next-line react/no-unused-state
      operation: result.operation,
    });
    console.log(this.state);
  }

  render() {
    return (
      <div className="calculator">
        <Display />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}
export default App;
