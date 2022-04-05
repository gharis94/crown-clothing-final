import React from 'react'
import {GooglePopup,CreateUserDocFromAuth} from '../../utils/firebase/firebase';
const SignInUp = () => {
    const GoogleSignup = async()=>{
        const {user} = await GooglePopup();
        console.log(user)
        const data = await CreateUserDocFromAuth(user)
    }
  return (
    <div>SignInUp
        <button onClick={()=>GoogleSignup()}>Sign up with Google</button>
    </div>
  )
}

export default SignInUp