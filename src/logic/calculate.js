import operate from './operate';

const calculate = (dataObject, buttonName) => {
  let { total, next, operation } = dataObject;
  const buttonOperations = ['+', '-', 'X', '/', '%', '+/-'];
  if (buttonName === 'AC') {
    total = '';
    next = '';
    operation = '';
  } else if (buttonName === '=') {
    if (total && next && operation) {
      total = operate(total, next, operation);
      next = '';
      operation = '';
    }
  } else if (buttonOperations.includes(buttonName)) {
    if (total && next && operation) {
      if (buttonName === '+/-') {
        total = operate(total, '-1', 'X');
        next = operate(next, '-1', 'X');
      }
      total = operate(total, next, operation);
      operation = buttonName;
      next = '';
    } else if (next && !operation) {
      total = next;
      operation = buttonName;
      next = '';
    } else {
      operation = buttonName;
    }
  } else if (buttonName === '+/-') {
    if (next) {
      next = operate(next, '-1', 'X');
    } else if (total) {
      total = operate(total, '-1', 'X');
    }
  } else if (buttonName === '.') {
    if (next && !next.includes(buttonName)) {
      next = next.concat(buttonName);
    } else if (next !== '' && !next.includes(buttonName)) {
      next = next.concat(buttonName);
    } else if (total === '') {
      total = '0';
      total = total.concat(buttonName);
    } else if (total !== '' && !total.includes(buttonName)) {
      total = total.concat(buttonName);
    }
  } else if (/^[0-9]+$/.test(buttonName)) {
    if (operation === '') {
      if (total[0] === '0' && buttonName === '0' && total[1] !== '.') {
        console.log(total);
        total = '';
      } else {
        total = total.concat(buttonName);
      }
    } else {
      next = next.concat(buttonName);
    }
  }
  return { total, next, operation };
};
export default calculate;
