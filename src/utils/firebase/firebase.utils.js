import {initializeApp} from 'firebase/app';
import {
        getAuth, 
        signInWithRedirect, signInWithPopup, signInWithEmailAndPassword,
        createUserWithEmailAndPassword,
        GoogleAuthProvider,
        signOut,
        onAuthStateChanged,
        
    } from 'firebase/auth';


import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs,
    } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCWEacMNacox24tzvmzTRbyX0KBZJLnpNY",
    authDomain: "crwn-clothing-9d439.firebaseapp.com",
    projectId: "crwn-clothing-9d439",
    storageBucket: "crwn-clothing-9d439.firebasestorage.app",
    messagingSenderId: "765288420629",
    appId: "1:765288420629:web:c7d4ef49feffc5f109c51c"
  };

  
 initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();



googleProvider.setCustomParameters({prompt: 'select_account'});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();


//This function is used to add a collection and documents to the firestore database.
//This will run only once, to be able to push the information to the DB, using a useEffect in categories.context.jsx
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object);
    });

    await batch.commit();
    console.log('done');
}



//This function is used to get the categories and documents from the firestore database.
export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
        const {title, items} = docSnapshot.data();
        acc[title.toLowerCase()] = items;
        return acc;
    }, {});

    return categoryMap;
    
}


export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => { 
  
    if (!userAuth) return;
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
            createdAt,
            ...additionalInformation
        });
    } catch (error) {
        console.log('error creating user', error.message);
    }

    return userDocRef;
}
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);