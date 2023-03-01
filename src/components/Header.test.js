import React from 'react';
import { shallow} from 'enzyme';
import Header from './Header';
import Enzyme from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';

Enzyme.configure({ adapter: new Adapter() });

describe('Header', () => {
  it('should renders correctly', () => {
    const component = shallow(<Header />);
        expect(component).toMatchSnapshot();
  });
});