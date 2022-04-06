import React from 'react';
import { useState } from 'react';
import {
    CreateAuthUserWithEmailAndPassword,
    CreateUserDocFromAuth
} from '../../utils/firebase/firebase';

const DefaultState={
    displayName: '',
    email:'',
    password:'',
    confirmPassword:''
};

const SignUpForm = () => {
    const [state,setState] = useState(DefaultState);
    const {displayName,email,password,confirmPassword} = state;

    const Default=()=>{
        setState(DefaultState);
    }

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setState({...state,[name]:value})
    };
    const handleSubmit=async(e)=>{
        e.preventDefault();
        if(password !== confirmPassword){
            return alert('password does not match')
        };
        try{
            const {user} =await CreateAuthUserWithEmailAndPassword(email, password);
            console.log(user);
            await CreateUserDocFromAuth(user,{displayName});
            Default();
        }catch(error){
            console.log('erorr',error)
        }
        
    }
  return (
    <div>
        <h2>Sign Up Form</h2>
        <form onSubmit={(e)=>handleSubmit(e)}>
            <label>Name</label>
            <input required onChange={(e)=>handleChange(e)} type='text' name='displayName' value={displayName} />
            <label>Email</label>
            <input required onChange={(e)=>handleChange(e)} type='email' name='email' value={email} />
            <label>Password</label>
            <input required onChange={(e)=>handleChange(e)} type='password' name='password' value={password}/>
            <label>Confirm Password</label>
            <input required onChange={(e)=>handleChange(e)} type='password' name='confirmPassword' value={confirmPassword}/>
            <button>Sign Up</button>
        </form>
    </div>
  )
}

export default SignUpForm