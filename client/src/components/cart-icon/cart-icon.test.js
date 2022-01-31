import React from 'react';
import {CartIcon} from './cart-icon.component';
import { fireEvent, render, screen } from '@testing-library/react';

const mockToggleCartHidden = jest.fn();

describe('CartIcon component', () => {
  it("should render correct item count", () => {
    render(<CartIcon itemCount={10} toggleCartHidden={mockToggleCartHidden}/>);
    const cartCountElement = screen.getByTestId('cart-count');
    expect(cartCountElement.textContent).toBe("10");
  });

  it("should call toggleCartHidden when container is clicked", () => {
    render(<CartIcon itemCount={10} toggleCartHidden={mockToggleCartHidden}/>);
    const cartContainerElement = screen.getByTestId("cart-container");
    fireEvent.click(cartContainerElement);
    expect(mockToggleCartHidden).toHaveBeenCalled();
  })
})