import { shallow } from 'enzyme';
import React from 'react';
import ErrorBoundary from './error-boundary.component';

it('expect to render ErrorBoundary component', () => {
  expect(shallow(<ErrorBoundary />)).toMatchSnapshot();
})
