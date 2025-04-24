// import { useEffect } from 'react';
// import { getRedirectResult } from 'firebase/auth';




    import SignUpForm from '../../components/sing-up-form/sing-up-form.components';
    import SignInForm from '../../components/sing-in-form/sing-in-form.components';

    import './authentication.styles.scss';

const Authentication = () => {

    // useEffect(async () => {
    // //     const response = await getRedirectResult(auth);
    // //     if(response){
    // //         const userDocRef = await createUserDocumentFromAuth(response.user);
    // //     }
    // // }
    // // ,[]);

    
   
  
    
    
    return (
        <div className='authentication-container'>
             
             {/* <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button> */}
       <SignInForm />
        <SignUpForm />
        </div>
    );
   
}


export default Authentication;