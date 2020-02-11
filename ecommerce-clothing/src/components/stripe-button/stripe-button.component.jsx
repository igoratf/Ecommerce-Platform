import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import crwnLogo from '../../assets/crwn.svg';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_l4aqe0SsS6G3f3sU9LLb7FeF00tdeLsfBr';
    
    const onToken = (token) => {
        console.log('Token ', token);
        alert('Payment sucessful');
    }

    return (
    <StripeCheckout
    label='Pay Now'
    name='E-commerce Clothing'
    billingAddress 
    shippingAddress
    image={crwnLogo}
    description={`Your total is ${price}`}
    amount={priceForStripe}
    panelLabel='Pay Now'
    token={onToken}
    stripeKey={publishableKey}/>
    );
}

export default StripeCheckoutButton;