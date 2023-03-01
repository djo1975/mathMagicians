import React from 'react';
import { shallow} from 'enzyme';
import Home from './Home';
import Enzyme from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';

Enzyme.configure({ adapter: new Adapter() });

describe('Home component', () => {
  it('should render correctly', () => {
    const component = shallow(<Home />);
        expect(component).toMatchSnapshot();
  });
});
