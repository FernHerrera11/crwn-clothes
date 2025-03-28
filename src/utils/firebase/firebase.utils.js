import {initializeApp} from 'firebase/app';
import {getAuth, 
        signInWithRedirect, 
        signInWithPopup, 
        GoogleAuthProvider} from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDcjIncxoWzfD1YYUmsauAPCUFM58s6FDQ",
    authDomain: "crwn-clothes-db-67abe.firebaseapp.com",
    projectId: "crwn-clothes-db-67abe",
    storageBucket: "crwn-clothes-db-67abe.firebasestorage.app",
    messagingSenderId: "508593092770",
    appId: "1:508593092770:web:9b0e9e043fe5ec0e967ffb"
  };

  
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => { 
    const userDocRef = doc(db, 'users', 'userAuth.uid');

const userSnapshot = await getDoc(userDocRef);
console.log(userSnapshot.exists());

if(!userSnapshot.exists()){
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try {
        await setDoc(userDocRef, {
            displayName,
            email,
            createdAt
        });
    } catch (error) {
        console.log('error creating user', error.message);
    }

    return userDocRef;
}
}