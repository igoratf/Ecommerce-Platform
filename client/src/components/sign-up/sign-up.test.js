import React from 'react';
import { shallow } from 'enzyme';

import { SignUp } from './sign-up.component';

describe('Sign Up component', () => {
  let wrapper;
  let mockSignUpStart;
  let mockIsSigningUp;

  beforeEach(() => {
    mockSignUpStart = jest.fn();
    mockIsSigningUp = false;

    const mockProps = {
      signUpStart: mockSignUpStart,
      isSigningUp: mockIsSigningUp
    }

    wrapper = shallow(<SignUp {...mockProps} />);
  });

  it('should render SignUp component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call mockSignUpStart when form is submitted', () => {
    wrapper.find('#signUpForm').simulate('submit', { preventDefault() {} });
    expect(mockSignUpStart).toHaveBeenCalled();
  });

  it('should render ButtonSpinner if isSigningUp is true', () => {
    const newMockProps = {
      signUpStart: mockSignUpStart,
      isSigningUp: true
    };

    const newWrapper = shallow(<SignUp {...newMockProps} />);

    expect(newWrapper.exists("ButtonSpinner")).toBe(true);
  })
})