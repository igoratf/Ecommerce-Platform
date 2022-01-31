import React from 'react';
import { screen, render } from "@testing-library/react";
import { CheckoutPage } from "./checkout.component";

import { Provider } from 'react-redux';
import { store } from '../../redux/store';

const mockCartItems = [{id: 1, name: "shirt", imageUrl: "", price: 100, quantity: 2}]

const MockCheckoutPage = ({cartItems, total}) => {
  return (
    <Provider store={store}>
      <CheckoutPage cartItems={cartItems} total={total} />
    </Provider>
  )
}

describe("Checkout", () => {
  it("should render correct amount of checkout items", () => {
    render(<MockCheckoutPage cartItems={mockCartItems} total={300} />);
    const cartItems = screen.getAllByTestId("checkout-item");
    expect(cartItems.length).toBe(1);
  });

  it("should render correct total", () => {
    render(<MockCheckoutPage cartItems={mockCartItems} total={300} />);
    const cartTotal = screen.getByText(/TOTAL: /i);
    expect(cartTotal.textContent).toBe(`TOTAL: $300`);
  });

  it("should render payment button", () => {
    render(<MockCheckoutPage cartItems={mockCartItems} total={300} />);
    const paymentButton = screen.getByText(/Pay Now/i);
    expect(paymentButton).toBeInTheDocument();
  })
});
