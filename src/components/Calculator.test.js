import React from 'react';
import { create } from 'react-test-renderer';
import Calculator from './Calculator';

describe('Calculator', () => {
  test('renders correctly', () => {
    const calculator = create(<Calculator />);
    expect(calculator.toJSON()).toMatchSnapshot();
  });
});
