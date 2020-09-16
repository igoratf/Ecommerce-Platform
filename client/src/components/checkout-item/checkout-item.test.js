import React from 'react';
import { shallow } from 'enzyme';

import { CheckoutItem } from './checkout-item.component';

describe('CheckoutItem component', () => {
  let wrapper;
  let mockClearItem;
  let mockAddItem;
  let mockRemoveItem;
  const mockCartItem = {name: 'test', imageUrl: 'mock', price: 10, quantity: 2}

  beforeEach(() => {
    mockClearItem = jest.fn();
    mockAddItem = jest.fn();
    mockRemoveItem = jest.fn();

    const mockProps = {
      clearItem: mockClearItem,
      addItem: mockAddItem,
      removeItem: mockRemoveItem,
      cartItem: mockCartItem
    };

    wrapper = shallow(<CheckoutItem {...mockProps} />);
  });

  it('should render CheckoutItem component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should addItem when right arrow is clicked', () => {
    wrapper.find('QuantityContainer').childAt(2).simulate('click');
    expect(mockAddItem).toHaveBeenCalled();
  });

  it('should call removeItem when left arrow is clicked', () => {
    wrapper.find('QuantityContainer').childAt(0).simulate('click');
    expect(mockRemoveItem).toHaveBeenCalled();
  });

  it('should call clearItem when remove button is clicked', () => {
    wrapper.find('RemoveButtonContainer').simulate('click');
    expect(mockClearItem).toHaveBeenCalled();
  });
})