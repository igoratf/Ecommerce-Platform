import React from 'react';
import { shallow } from 'enzyme';
import {CartIcon} from './cart-icon.component';

describe('CartIcon component', () => {
  let wrapper;
  let mockToggleCartHiden;
  
  beforeEach(() => {
    mockToggleCartHiden = jest.fn();

    const mockProps = {
      itemCount: 0,
      toggleCartHidden: mockToggleCartHiden
    }

    wrapper = shallow(<CartIcon {...mockProps} />);
  });

  it('should render CartIcon component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call toggleCartHidden when icon is clicked', () => {
    wrapper.find('.cart-icon').simulate('click');
    expect(mockToggleCartHiden).toHaveBeenCalled();
  });

  it('should render itemCount text', () => {
    const itemCount = parseInt(wrapper.find('.item-count').text());
    expect(itemCount).toBe(0);
  })
})