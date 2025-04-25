import {Outlet, Link} from 'react-router-dom';
//Fragment is a component that is imported from the react package.
//It is used to wrap multiple elements in a single parent element.

import { Fragment, useContext } from 'react';   
import crwnLogo from '../../assets/crown.svg';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import  UserContext from '../../contexts/user.createContext';
import CartContext from '../../contexts/cart-create-context';
import './navigation.styles.scss';
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
      <div className='navigation' >
        <Link to='/' className='logo-container'>
            <img src={crwnLogo} alt='crwn-logo' className='logo' />
        </Link>
        
        <div className='nav-links-container'> 
            <Link className='nav-link' to='/shop'>
                SHOP
            </Link>
            {currentUser ? (
                <span className='nav-link' onClick={signOutHandler}> SIGN OUT</span>
            ) : ( <Link className='nav-link' to='/auth'>
                SIGN IN
            </Link>
            )}
            <CartIcon />
        </div>
       { isCartOpen && <CartDropdown /> } 
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation;