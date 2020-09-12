import { shallow } from 'enzyme';
import React from 'react';
import Homepage from './homepage.component';

it('expect to render home page', () => {
  expect(shallow(<Homepage />)).toMatchSnapshot();
})
