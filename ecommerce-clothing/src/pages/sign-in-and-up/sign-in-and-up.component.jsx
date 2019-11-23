import React from 'react';
import './sign-in-and-up.styles.scss';
import SignIn from '../../components/sign-in/sign-in.component';

const SignInAndUp = (props) => {
    console.log('PROPS ', props);
    return(
    <div className="sign-in-and-up">
        <SignIn />
    </div>
)}

export default SignInAndUp;