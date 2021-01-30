import operate from './operate';

describe('operate logic tests', () => {
  it('sums given values correctly', () => {
    expect(operate(2.3, 3.5, '+')).toEqual('5.8');
  });

  it('subtract given values correctly', () => {
    expect(operate(3.5, 2.5, '-')).toEqual('1');
  });

  it('multiply given values correctly', () => {
    expect(operate(8, 4, 'X')).toEqual('32');
  });

  it('Divide given values correctly', () => {
    expect(operate(8, 4, '/')).toEqual('2');
  });
});
