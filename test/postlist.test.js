import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';

import PostList from '../components/PostList';
import Adapter from 'enzyme-adapter-react-15';

configure({ adapter: new Adapter() });

describe('PostView', function() {

  it('should be defined', function() {
    expect(shallow(<PostList />)).toBeDefined();
  });

  it('should have class "container"', function() {
    expect(shallow(<PostList />).is('.container')).toBe(true);
  });

  it('should have header "CreatedAt, Title, Description, Image, Author, Votes"', function() {
    const wrapper = shallow(<PostList />);
    const header = wrapper.find('.container').first().find('table thead tr th');
    expect(header.length).toBe(6);
    const values = ['CreatedAt', 'Title', 'Description', 'Image', 'Author', 'Votes']
    header.map((h, i) => {
      expect(h.contains(values[i]));
    })
  });

  it('should list 8 posts', function() {
    const wrapper = shallow(<PostList />);
    expect(wrapper.find('.container').first().find('table tbody tr').length).toBe(8);
  });
});
