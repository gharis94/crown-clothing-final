import { createContext, useEffect, useState } from "react";
import {onAuthStateChangedListner,CreateUserDocFromAuth} from '../utils/firebase/firebase'
const DefaultState ={
    currentUser:null,
    setcurrentUser: () => null
};

export const UserContext = createContext(DefaultState);

export const UserProvider =({children}) =>{
    const [currentUser, setcurrentUser] = useState(null);

    useEffect(()=>{
        const unsuscribe=onAuthStateChangedListner((user)=>{
            if(user){
                CreateUserDocFromAuth(user);
            }
            console.log(user)
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