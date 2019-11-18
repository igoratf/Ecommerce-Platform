import React, { Component } from 'react';

import FormInput from '../FormInput/FormInput';

import './SignIn.scss';

export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({email:'', password: ''});
    }

    handleChange = (event) => {
        const { value, name } = event.target;

        this.setState({ [name]: value})
    }


    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    name="email" 
                    type="email" 
                    label="Email"
                    value={this.state.email}
                    handleChange={this.handleChange}
                    required />

                    <FormInput 
                    name="password" 
                    type="password"
                    label="Password"
                    value={this.state.password} 
                    handleChange={this.handleChange}
                    required />

                    <FormInput type="submit" value="Submit form" />
                </form>
            </div>
        )
    }
}
