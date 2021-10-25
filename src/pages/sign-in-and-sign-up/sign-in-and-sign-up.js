import React from 'react';

import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sign-up/sign-up';

import './sign-in-and-sign-up.styles.scss';



class SignInAndSignUpPage extends React.Component {

  constructor() {
    super()

  }
  render() {
    return (
      <div className="sign-in-and-sign-up">
        <SignIn />
        <SignUp />
      </div>
    );
  };
}

// or
//
// class Carousel extends React.Component {
//   render() {
//     return (
//       <div />
//     );
//   }
// }


// <div className='sign-in-and-sign-up'>
// 
// </div>
// );

export default SignInAndSignUpPage;