import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import Home from './Home';

Enzyme.configure({ adapter: new Adapter() });

describe('Home component', () => {
  it('should render correctly', () => {
    const component = shallow(<Home />);
    expect(component).toMatchSnapshot();
  });
});
