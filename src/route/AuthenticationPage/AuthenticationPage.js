import React from 'react'
import SignInForm from '../../components/SignIn/SignInForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

const AuthenticationPage = () => {
    
  return (
    <div>
      <SignInForm/>  
      <SignUpForm/>
    </div>
  )
}

export default AuthenticationPage;