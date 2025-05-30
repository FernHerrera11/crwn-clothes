import { useState , useEffect} from 'react';
import { createUserDocumentFromAuth, onAuthStateChangedListener} from '../utils/firebase/firebase.utils';
import UserContext  from './user.createContext';

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };

    

    useEffect(() => {
      const unsubscribe =  onAuthStateChangedListener((user) => {
        if(user) {
          createUserDocumentFromAuth(user);
        }
        console.log(user);
        setCurrentUser(user); 
      } )
        return unsubscribe;
    }, []);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};