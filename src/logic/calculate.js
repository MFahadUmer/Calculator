import operate from './operate';

const calculate = (dataObject, buttonName) => {
  let { total, next, operation } = dataObject;
  const buttonOperations = ['+', '-', 'X', '/', '%'];
  if (buttonName === 'AC') {
    total = null;
    next = null;
    operation = null;
  } else if (buttonName === 'DEL') {
    if (next) {
      next = null;
    } else if (total) {
      total = null;
    }
  } else if (buttonName === '=') {
    if (total && next && operation) {
      total = operate(total, next, operation);
      next = null;
      operation = null;
    } else if (buttonOperations.includes(buttonName)) {
      if (total && next && operation) {
        total = operate(total, next, operation);
        operation = buttonName;
        next = null;
      } else if (next && !operation) {
        total = next;
        operation = buttonName;
        next = null;
      } else {
        operation = buttonName;
      }
    } else if (buttonName === '=/*') {
      if (next) {
        next = operate(next, '-1', 'X');
      } else if (total) {
        total = operate(total, '-1', 'X');
      }
    }
  }
  return { total, next, operation };
};
export default calculate;
