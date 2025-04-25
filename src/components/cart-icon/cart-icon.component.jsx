import './cart-icon.styles.scss';
import  shoppingIcon  from '../../assets/shopping-bag.svg';
import { useContext } from 'react';
import CartContext from '../../contexts/cart-create-context';


const CartIcon = ()    => {
    const { isCartOpen, setIsCartOpen} = useContext(CartContext);

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);


return (
    <div className='cart-icon-container' onClick={toggleIsCartOpen}>
        <img src={shoppingIcon} className='shopping-icon' />
        <span className="item-count">0</span>
    </div>


)

}

export default CartIcon;