 import styled from "styled-components";

 //how to import an svg file as a react component, in vite. By adding ?React to the end of the import statement
 import ShoppingSvg from '../../assets/shopping-bag.svg?react';
 
 
 export const ShoppingIcon = styled(ShoppingSvg)`
   
   width: 45px; 
   height: 45px; 
   
 
  
`
 
export const CartIconContainer = styled.div`
   width: 45px;
   height: 45px;
   position: relative; 
   display: flex; 
   align-items: center; 
   justify-content: center;
   cursor: pointer; 

   
`

export const ItemCount = styled.span`
   position: absolute;
   font-size: 10px;
   font-weight: bold;
   bottom: 12px;

`

    


 
    