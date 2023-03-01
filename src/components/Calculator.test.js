import React from 'react';
import { shallow} from 'enzyme';
import Calculator from './Calculator';
import Enzyme from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';

Enzyme.configure({ adapter: new Adapter() });

describe('Calculator', () => {
  it('should renders correctly', () => {
    const component = shallow(<Calculator />);
        expect(component).toMatchSnapshot();
  });
});
