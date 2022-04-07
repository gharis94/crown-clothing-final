import { initializeApp } from "@firebase/app";
import {getAuth,signInWithPopup,GoogleAuthProvider,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged} from 'firebase/auth';
import {getFirestore,doc,getDoc,setDoc} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCCD7o2_BtaBDHaWxIIDsQAKnUgOPnAk-c",
    authDomain: "crwn-clothing-4c8ad.firebaseapp.com",
    projectId: "crwn-clothing-4c8ad",
    storageBucket: "crwn-clothing-4c8ad.appspot.com",
    messagingSenderId: "716753878567",
    appId: "1:716753878567:web:9b7aa60227c50188ed5802"
};

const firebaseapp = initializeApp(firebaseConfig);

const provider =new GoogleAuthProvider();
provider.setCustomParameters({
    prompt:"select_account"
});

export const auth =getAuth();
export const GooglePopup = () => signInWithPopup(auth,provider);

export const db = getFirestore();

export const CreateUserDocFromAuth =  async(userauth,otherProps={})=>{
    const userDoc = doc(db,'users',userauth.uid);
    
    const userSnapshot = await getDoc(userDoc);
    

    if(!userSnapshot.exists()){
        const {displayName,email}=userauth;
        const CreatedAt = new Date();
        try{
            await setDoc(userDoc,{
                displayName,
                email,
                CreatedAt,
                ...otherProps
            })
        }catch(error){
            console.log('error creating user',error.message)
        }
    }
    return userDoc;
};

export const CreateAuthUserWithEmailAndPassword=async(email,password)=>{
 if(!email || !password)return;

 return await createUserWithEmailAndPassword(auth, email, password)
};

export const SingAuthUserWithEmailAndPassword=async(email,password)=>{
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth,email,password);
};

export const SignOutUser=async()=>await signOut(auth);

export const onAuthStateChangedListner =(callback)=>onAuthStateChanged(auth,callback);