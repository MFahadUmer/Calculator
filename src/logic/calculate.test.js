import calculate from './calculate';

describe('Calculate logic Tests', () => {
  it('returns arranged form of the operation if any operation button is pressed and there is no a previous operation', () => {
    expect(calculate({ total: '', next: '10', operation: '' }, '+')).toEqual({
      total: '10',
      next: '',
      operation: '+',
    });
  });

  it('adds pressed button to next if any number is pressed ', () => {
    expect(calculate({ total: '4', next: '10', operation: 'X' }, '2')).toEqual({
      total: '4',
      next: '102',
      operation: 'X',
    });
  });

  it('adds pressed button to next if dot button is pressed ', () => {
    expect(calculate({ total: '4', next: '10', operation: '' }, '.')).toEqual({
      total: '4',
      next: '10.',
      operation: '',
    });
  });

  it('returns result of the previous calculation if equal button is pressed ', () => {
    expect(calculate({ total: '4', next: '10', operation: 'X' }, '=')).toEqual({
      total: '40',
      next: '',
      operation: '',
    });
  });

  it('updates operation if next is empty string', () => {
    expect(calculate({ total: '3', next: '', operation: 'X' }, '+')).toEqual({
      total: '3',
      next: '',
      operation: '+',
    });
  });

  it('return zero if result of calculation is less than 5*10^-21', () => {
    expect(calculate({ total: '1e-20', next: '3', operation: '÷' }, '=')).toEqual(
      {
        total: '0',
        next: '',
        operation: '',
      },
    );
  });

  it('return zero if result of calculation is less than 5*10^-21', () => {
    expect(calculate({ total: '1e-20', next: '3', operation: '÷' }, '=')).toEqual(
      {
        total: '0',
        next: '',
        operation: '',
      },
    );
  });
});
