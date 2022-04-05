import React from 'react'
import {GooglePopup} from '../../utils/firebase/firebase';
const SignInUp = () => {
    const GoogleSignup = async()=>{
        const rsp = await GooglePopup();
        console.log(rsp);
    }
  return (
    <div>SignInUp
        <button onClick={()=>GoogleSignup()}>Sign up with Google</button>
    </div>
  )
}

export default SignInUp