import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectIsSigningUp } from '../../redux/user/user.selectors';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { ButtonOnLoading } from '../custom-button/custom-button.styles';

import { SignUpContainer, SignUpTitle } from './sign-up.styles';
import { ButtonSpinner } from '../spinner/spinner.styles';

import { signUpStart } from '../../redux/user/user.actions';

export const SignUp = ({ signUpStart, isSigningUp }) => {
    const [userCredentials, setUserCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const { displayName, email, password, confirmPassword } = userCredentials;

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }

        signUpStart(displayName, email, password);

    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setUserCredentials({ ...userCredentials, [name]: value });
    }

    return (
        <SignUpContainer>
            <SignUpTitle>I do not have an account</SignUpTitle>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit} id="signUpForm">
                <FormInput
                    type="text"
                    name="displayName"
                    value={displayName}
                    onChange={handleChange}
                    label="Display Name"
                    required />

                <FormInput
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    label="Email"
                    required />

                <FormInput
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    label="Password"
                    required />

                <FormInput
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={handleChange}
                    label="Confirm Password"
                    required />

                { isSigningUp ? 
                    <ButtonOnLoading>
                        <ButtonSpinner />
                    </ButtonOnLoading>
                    :
                <CustomButton type="submit">SIGN UP</CustomButton>
                }
            </form>
        </SignUpContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    isSigningUp: selectIsSigningUp
});

const mapDispatchToprops = dispatch => ({
    signUpStart: (displayName, email, password) => dispatch(signUpStart({ displayName, email, password }))
});

export default connect(mapStateToProps, mapDispatchToprops)(SignUp);