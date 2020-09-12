import { shallow } from 'enzyme';
import React from 'react';
import FormInput from './form-input.component';

it('expect to render FormInput component', () => {
  const mockProps = {
    handleChange: jest.fn(), 
    name:'email',
    type:'email',
    label:'test',
    value: 'test@test.com',
  }
  expect(shallow(<FormInput {...mockProps}/>)).toMatchSnapshot();
})
