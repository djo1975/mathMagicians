import calculate from './logic/calculate';

describe('calculate', () => {
  it('should reset calculator data object when "AC" button is pressed', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, 'AC');
    expect(result).toEqual({ total: null, next: null, operation: null });
  });

  it('should concatenate numbers when a number button is pressed', () => {
    const result = calculate({ total: null, next: '10', operation: null }, '5');
    expect(result).toEqual({ total: null, next: '105', operation: null });
  });

  it('should not allow multiple leading zeros', () => {
    const result = calculate({ total: '10', next: '0', operation: null }, '0');
    expect(result).toEqual({});
  });

  it('should add decimal point when "." button is pressed', () => {
    const result = calculate({ total: '10', next: '5', operation: null }, '.');
    expect(result).toEqual({ total: '10', next: '5.', operation: null });
  });

  it('should negate the current number when "+/-" button is pressed', () => {
    const result = calculate({ total: '10', next: '5', operation: null }, '+/-');
    expect(result).toEqual({ total: '10', next: '-5', operation: null });
  });

  it('should add two numbers when "=" button is pressed', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, '=');
    expect(result).toEqual({ total: '15', next: null, operation: null });
  });

  it('should handle pressing "=" button without an operation', () => {
    const result = calculate({ total: '10', next: '5', operation: null }, '=');
    expect(result).toEqual({});
  });
});
