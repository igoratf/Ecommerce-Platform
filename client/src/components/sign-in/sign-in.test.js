import React from 'react';
import { shallow } from 'enzyme';

import { SignIn } from './sign-in.component';
import CustomButton from '../custom-button/custom-button.component';

describe('SignIn component', () => {
  let wrapper;
  let mockEmailSignInStart;
  let mockGoogleSignInStart;
  let mockIsSigningIn;

  beforeEach(() => {
    mockEmailSignInStart = jest.fn();
    mockGoogleSignInStart = jest.fn();
    mockIsSigningIn = false;

    const mockProps = {
      emailSignInStart: mockEmailSignInStart,
      googleSignInStart: mockGoogleSignInStart,
      isSigningIn: mockIsSigningIn
    };

    wrapper = shallow(<SignIn {...mockProps} />);
  });

  it('should render SignIn component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call emailSignInStart when form is submitted', () => {
    wrapper.find('#signInForm').simulate('submit', { preventDefault() {} });
    expect(mockEmailSignInStart).toHaveBeenCalled();
  })

  it('should call googleSignInStart when google sign in button is clicked', () => {
    wrapper.find(CustomButton).at(1).simulate('click');
    expect(mockGoogleSignInStart).toHaveBeenCalled();
  });

  it('should render ButtonSpinner if signingIn is true', () => {
    const newMockProps = {
      emailSignInStart: mockEmailSignInStart,
      googleSignInStart: mockGoogleSignInStart,
      isSigningIn: true
    };

    const newWrapper = shallow(<SignIn {...newMockProps} />);

    expect(newWrapper.exists("ButtonSpinner")).toBe(true);
  })

});