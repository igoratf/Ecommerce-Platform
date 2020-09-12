import { shallow } from 'enzyme';
import React from 'react';
import SignInAndUp from './sign-in-and-up.component';

it('expect to render sign in and sign up page', () => {
  expect(shallow(<SignInAndUp />)).toMatchSnapshot();
})
