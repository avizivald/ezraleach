import React from 'react';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button.';

import { auth, createUserProfileDocument } from '../../firebase/firebase.config'

import './sign-up.style.scss';

class UserDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      Synagogue: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { Synagogue, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        Synagogue: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { Synagogue, email, password, confirmPassword } = this.state;
    return (
      <div className='sign-up'>
        <h2 className='title'>הגדר את התצוגות המועדפות עליך</h2>
        <span></span>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='SynagogueName'
            value={Synagogue}
            onChange={this.handleChange}
            label='Synagogue Name'
            required
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            label='Email'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            label='Password'
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.handleChange}
            label='Confirm Password'
            required
          />
          <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default UserDetails;