import {Outlet, Link} from 'react-router-dom';
//Fragment is a component that is imported from the react package.
//It is used to wrap multiple elements in a single parent element.

import { Fragment } from 'react';   
import crwnLogo from '../../assets/crown.svg';
import './navigation.styles.scss';

const Navigation = () => {
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
            <Link className='nav-link' to='/sign-in'>
                Sign In
            </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation;