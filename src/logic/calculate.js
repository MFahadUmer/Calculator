const calculate = (dataObject, buttonName) => {
  let { total, next, operation } = dataObject;
  const buttonOperations = ['+', '-', 'X', '/', '%'];
  if (buttonName === '+/-') {
    total *= -1;
    next *= -1;
  } else if (buttonName === 'AC') {
    total = 0;
    next = 0;
  }
  buttonOperations.forEach(value => {
    if (buttonName === value) {
      operation = value;
    }
  });
  return { total, next, operation };
};
export default calculate;
