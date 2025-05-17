import { useState } from "react";
import { 
    // createUserDocumentFromAuth,
    signInWithGooglePopup,
    signInAuthUserWithEmailAndPassword

} from "../../utils/firebase/firebase.utils";

import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";

import FormInput from "../form-input/form-input.component";


const defaultFormFields = {
    
    email: '',
    password: ''
}

import { HeaderTitle, SignUpContainer, ButtonsContainer } from './sign-in-form.styles';

const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password} = formFields;


    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }
    const signInWithGoogle = async () => { 
    await signInWithGooglePopup();
    
};

    const handleSubmit = async (event) => {
        event.preventDefault();
     
        try {
           const {user} = await signInAuthUserWithEmailAndPassword(email, password);
              console.log(user);
            resetFormFields();
        } catch (error) {

         switch(error.code) {
            case 'auth/wrong-password':
                alert('incorrect password for email');
                break;
         
            case 'auth/user-not-found':
                alert('no user associated with this email');
             break;
            default: 
                console.log(error);
            
        }
    }
    };
    
    
    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    }

    return (
        <SignUpContainer>
            <HeaderTitle>Already have an account?</HeaderTitle>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
          

                <FormInput label="Email" type='email'  required onChange={handleChange} name="email" value={email} />

                <FormInput label="Password" type='password'  required onChange={handleChange} name="password" value={password} />

                <ButtonsContainer>
                    <Button type='submit'>Sing In</Button>
                    <Button type='button' onClick={signInWithGoogle} buttonType={BUTTON_TYPE_CLASSES.google} >Google Sign In </Button>
                </ButtonsContainer>
                
            </form>
        </SignUpContainer>
    ); }

export default SignInForm;