import {Outlet, Link} from 'react-router-dom';
//Fragment is a component that is imported from the react package.
//It is used to wrap multiple elements in a single parent element.

import { Fragment, useContext } from 'react';   
import crwnLogo from '../../assets/crown.svg';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import  UserContext from '../../contexts/user.createContext';
import CartContext from '../../contexts/cart-create-context';
import {NavigationContainer, NavLinks, NavLink, LogoContainer } from './navigation.styles';
import { signOutUser } from '../../utils/firebase/firebase.utils';


const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  // console.log(currentUser);
  const signOutHandler = async () => {
   await signOutUser();

  }


  return (
    <Fragment>
      <NavigationContainer >
        <LogoContainer to='/' >
            <img src={crwnLogo} alt='crwn-logo' className='logo' />
        </LogoContainer>
        
        <NavLinks> 
            <NavLink  to='/shop'>
                SHOP
            </NavLink>
            {currentUser ? (
                <NavLink as='span' onClick={signOutHandler}> SIGN OUT</NavLink>
            ) : ( <NavLink to='/auth'>
                SIGN IN
            </NavLink>
            )}
            <CartIcon />
        </NavLinks>
       { isCartOpen && <CartDropdown /> } 
      </NavigationContainer>
      <Outlet />
    </Fragment>
  )
}

export default Navigation;