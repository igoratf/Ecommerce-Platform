import React from 'react';
import { shallow } from 'enzyme';

import { Header } from './header.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

describe('Header component', () => {
  let wrapper;
  let mockSignOutStart;

  beforeEach(() => {
    mockSignOutStart = jest.fn();

    const mockProps = {
      hidden: true,
      currentUser: {
        uid: '911'
      },
      signOutStart: mockSignOutStart
    };

    wrapper = shallow(<Header {...mockProps} />);
  });

  it('should render Header component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('if currentUser exists', () => {
    it('should render sign out link', () => {
      expect(wrapper.find('OptionLink').at(1).text()).toBe('SIGN OUT');
    });

    it('should call signOutStart when sign out link is clicked', () => {
      wrapper.find('OptionLink').at(1).simulate('click');
      expect(mockSignOutStart).toHaveBeenCalled();
    });
  });

  describe('if currentUser is null', () => {
    it('should render sign in link', () => {
      const mockProps = {
        hidden: true,
        currentUser: null,
        signOutStart: mockSignOutStart
      };

      const newWrapper = shallow(<Header {...mockProps} />);

      expect(newWrapper.find('OptionLink').at(1).text()).toBe('SIGN IN');
    });

    it('should render CartDropdown if hidden is null', () => {
      const mockPropsHidden = {
        hidden: false,
        currentUser: null,
        signOutStart: mockSignOutStart
      };

      const newWrapperHidden = shallow(<Header {...mockPropsHidden} />);
      expect(newWrapperHidden.exists(CartDropdown)).toBe(true);
    });
  })
})