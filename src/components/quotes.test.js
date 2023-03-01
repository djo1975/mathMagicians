import React from 'react';
import { shallow} from 'enzyme';
import Quotes from './Quotes';
import Enzyme from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';

Enzyme.configure({ adapter: new Adapter() });

describe('Quotes', () => {
  it('should renders correctly', () => {
    const component = shallow(<Quotes />);
        expect(component).toMatchSnapshot();
  });
});