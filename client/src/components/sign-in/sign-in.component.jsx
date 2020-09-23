import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { ButtonOnLoading } from '../custom-button/custom-button.styles';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

import { selectIsSigningIn } from '../../redux/user/user.selectors';

import { ButtonSpinner } from '../spinner/spinner.styles';

import {
    SignInContainer,
    SignInTitle,
    ButtonsBarContainer
} from './sign-in.styles';

export const SignIn = ({ emailSignInStart, googleSignInStart, isSigningIn }) => {
    const [userCredentials, setUserCredentials] = useState({email: '', password: ''});

    const { email, password } = userCredentials;

    const handleSubmit = async (event) => {
        event.preventDefault();

        emailSignInStart(email, password);
    }

    const handleChange = (event) => {

        const { value, name } = event.target;
        
        setUserCredentials({...userCredentials, [name]: value });
    }


    return (
        <SignInContainer>
            <SignInTitle>I already have an account</SignInTitle>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit} id="signInForm">
                <FormInput
                    name="email"
                    type="email"
                    label="Email"
                    value={email}
                    handleChange={handleChange}
                    required />

                <FormInput
                    name="password"
                    type="password"
                    label="Password"
                    value={password}
                    handleChange={handleChange}
                    required />

                <ButtonsBarContainer>
                    { isSigningIn ? <ButtonOnLoading>
                        <ButtonSpinner/>
                    </ButtonOnLoading> : <CustomButton type="submit"> Sign In</CustomButton> }
                    <CustomButton type="button" isGoogleSignIn onClick={googleSignInStart}> Sign In with Google</CustomButton>
                </ButtonsBarContainer>
            </form>
        </SignInContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    isSigningIn: selectIsSigningIn
})

const mapDispatchToProps = (dispatch) => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);