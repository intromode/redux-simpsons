import React from 'react';
import { shallow } from 'enzyme';
import SimpQuote from './Quote';

describe('App component', () => {
  it('renders a App', () => {
    const wrapper = shallow(<SimpQuote quote={{
      quote: 'shanana',
      image: 'fjsdkfjl',
      character: 'me'
    
    }} />);
    expect(wrapper).toMatchSnapshot();
  });
});
