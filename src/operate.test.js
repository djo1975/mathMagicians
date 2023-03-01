import operate from './logic/operate';

describe('operate', () => {
  it('should add two numbers correctly', () => {
    expect(operate('10', '5', '+')).toBe('15');
  });

  it('should subtract two numbers correctly', () => {
    expect(operate('10', '5', '-')).toBe('5');
  });

  it('should multiply two numbers correctly', () => {
    expect(operate('10', '5', 'x')).toBe('50');
  });

  it('should divide two numbers correctly', () => {
    expect(operate('10', '5', '÷')).toBe('2');
  });

  it('should return "Can\'t divide by 0." when dividing by 0', () => {
    expect(operate('10', '0', '÷')).toBe("Can't divide by 0.");
  });

  it('should return "Can\'t find modulo as can\'t divide by 0." when finding modulo with 0', () => {
    expect(operate('10', '0', '%')).toBe("Can't find modulo as can't divide by 0.");
  });

  it('should throw an error when given an unknown operation', () => {
    expect(() => operate('10', '5', '&')).toThrowError("Unknown operation '&'");
  });
});
