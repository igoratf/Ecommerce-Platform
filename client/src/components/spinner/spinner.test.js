import { shallow } from 'enzyme';
import React from 'react';
import Spinner from './spinner.component';

it('expect to render Spinner component', () => {
  expect(shallow(<Spinner />)).toMatchSnapshot();
})
