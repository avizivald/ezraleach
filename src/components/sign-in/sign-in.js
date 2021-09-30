import React from 'react';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button.';
import {auth  , signInWithGoogle } from '../../firebase/firebase.config'
import './sign-in.styles.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit =async event => {
    event.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      alert(error.message);
    }
  };

  handleChange = event => {
    // console.log(event.target);
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>יש לי כבר חשבון</h2>
        <span>התחבר עם כתובת אימייל וסיסמא</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
          />
          <div className='buttons'>

            <CustomButton type='submit'> Sign in </CustomButton>

            <CustomButton type="button" isGoogleSignIn onClick={signInWithGoogle}>sign in With Google</CustomButton>
          </div>

        </form>
      </div>
    );
  }
}

export default SignIn;