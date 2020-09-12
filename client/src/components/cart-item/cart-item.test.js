import { shallow } from 'enzyme';
import React from 'react';
import CartItem from './cart-item.component';

it('expect to render CartItem component', () => {
  const mockProps = {
    imageUrl: 'mock',
    price: 1000,
    name: 'mockName',
    quantity: 10
  }
  expect(shallow(<CartItem item={mockProps}/>)).toMatchSnapshot();
})
