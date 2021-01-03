import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let result = 0;
  const numberOneBig = Big(numberOne);
  const numberTwoBig = Big(numberTwo);
  if (operation === '-') {
    result = numberOneBig - numberTwoBig;
  } else if (operation === '+') {
    result = numberOneBig.plus(numberTwoBig);
  } else if (operation === 'X') {
    result = numberOneBig * numberTwoBig;
  } else if (operation === '/') {
    result = numberOneBig / numberTwoBig;
  }
  return result.toString();
};

export default operate;
