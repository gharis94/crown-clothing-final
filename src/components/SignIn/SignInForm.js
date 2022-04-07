import React,{useState} from 'react'
import {SingAuthUserWithEmailAndPassword,GooglePopup,CreateUserDocFromAuth} from '../../utils/firebase/firebase'
const DefaultState={
    email:'',
    password:''
}

const SignInForm = () => {
    const [state,setState] = useState(DefaultState);
    const {email,password} = state;
    
    const Default=()=>{
        setState(DefaultState);
    }

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setState({...state,[name]:value})
    };
    const handleSubmit=async(e)=>{
        e.preventDefault();

        try{
            const rsp=await SingAuthUserWithEmailAndPassword(email,password);
            console.log(rsp)
            Default();

        }catch(error){
            console.log('sign in error',error)
        }
    };
    const SignInGoogle =async()=>{
        await GooglePopup();
         
    }
  return (
    <div>
        <h2>Already have account</h2>
        <form onSubmit={(e)=>handleSubmit(e)}>
            <label>Email</label>
            <input
                value={email}
                required
                type='email'
                onChange={(e)=>handleChange(e)}
                name='email'
                />
            <label>Password</label>
            <input 
                required
                value={password}
                name='password'
                onChange={(e)=>handleChange(e)}
                type='password'
            />
            <div className='button'>
                <button type='submit'>Sign In</button>
                <button onClick={()=>SignInGoogle()}>Sign In With Google</button>
            </div>
            
        </form>
    </div>
  )
}

export default SignInForm