import { createContext, useEffect, useState,useReducer } from "react";
import {onAuthStateChangedListner,CreateUserDocFromAuth} from '../utils/firebase/firebase'
const DefaultState ={
    currentUser:null,
};

export const userReducer=(state,action)=>{
    const {type,payload}= action;
    switch(type){
        case "USER":
            return{
                ...state,
                currentUser:payload
            }
        default:
            throw new Error(`error is useReducer ${type}`) ;    
    }
}

export const UserContext = createContext(DefaultState);

export const UserProvider =({children}) =>{
    //const [currentUser, setcurrentUser] = useState(null);
    const [{currentUser},dispatch]=useReducer(userReducer,DefaultState)

    const setcurrentUser=(user)=>{
        dispatch({type:"USER",payload:user})
    }
    useEffect(()=>{
        const unsuscribe=onAuthStateChangedListner((user)=>{
            if(user){
                CreateUserDocFromAuth(user);
            }

            setcurrentUser(user)
        });
        return unsuscribe;
    },[])
    
    
    return(
        <UserContext.Provider value = {{currentUser,setcurrentUser}}>
            {children}
        </UserContext.Provider>
    )
}