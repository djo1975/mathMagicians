import React from 'react';
import { shallow, wrapper } from 'enzyme';
import Home from './Home';

const wrapper = shallow(<Foo />);

describe('Home component', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Home />);
        expect(component).toMatchSnapshot();
  });
});
