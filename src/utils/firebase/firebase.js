import {initializeApp} from "firebase/app";
import {getAuth,signInWithPopup,GoogleAuthProvider} from 'firebase/auth'


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