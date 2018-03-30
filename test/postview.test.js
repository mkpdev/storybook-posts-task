import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';

import PostView from '../components/PostView';
import Adapter from 'enzyme-adapter-react-15';

configure({ adapter: new Adapter() });

describe('PostView', function() {

  const match = {params: { id: "1" }};

  it('should be defined', function() {
    expect(shallow(<PostView match={match} />)).toBeDefined();
  });

  it('should have class "polaroid"', function() {
    expect(shallow(<PostView match={match} />).is('.polaroid')).toBe(true);
  });

  it('should have title "Humans"', function() {
    const wrapper = shallow(<PostView match={match} />);
    expect(wrapper.find('.container').last().find('p').first().contains('Humans')).toBe(true);
  });
});

