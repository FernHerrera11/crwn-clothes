import {Total, CheckoutContainer, CheckoutHeader, HeaderBlock} from './checkout.styles';
import {useContext }   from 'react';
import  CartContext from '../../contexts/cart-create-context';
import CheckOutItem from '../../components/checkout-item/checkout-item.component';


const Checkout = () => {

    const { cartItems, cartTotal} = useContext(CartContext);

    
    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>

            </CheckoutHeader>
        
                {cartItems.map((cartItem) => 
                    <CheckOutItem key={cartItem.id} cartItem={cartItem} />
                    )}
            <Total>Total: ${cartTotal} </Total>
           
        </CheckoutContainer>
    );
}


export default Checkout;