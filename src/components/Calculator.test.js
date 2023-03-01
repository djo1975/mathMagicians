import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import Calculator from './Calculator';

Enzyme.configure({ adapter: new Adapter() });

describe('Calculator', () => {
  it('should renders correctly', () => {
    const component = shallow(<Calculator />);
    expect(component).toMatchSnapshot();
  });
});
