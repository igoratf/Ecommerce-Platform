import React from 'react';

import './sign-in-and-up.styles.scss';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInAndUp = (props) => {
    console.log('PROPS ', props);
    return(
    <div className="sign-in-and-up">
        <SignIn />
        <SignUp />
    </div>
)}

export default SignInAndUp;