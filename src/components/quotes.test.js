import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import Quotes from './Quotes';

Enzyme.configure({ adapter: new Adapter() });

describe('Quotes', () => {
  it('should renders correctly', () => {
    const component = shallow(<Quotes />);
    expect(component).toMatchSnapshot();
  });
});
