import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { UserProvider } from './contexts/user.context.jsx'
//BrowserRouter is a component that wraps the App component and provides the routing functionality to the App component.
//The BrowserRouter component is imported from the react-router-dom package.
import { BrowserRouter } from 'react-router-dom';
// import { ProductsProvider } from './contexts/products.context.jsx';
import { CartProvider } from './contexts/cart-context.jsx';

import './index.scss';
import { CatergoriesProvider } from './contexts/categories.context.jsx';

createRoot(document.getElementById('root')).render(
  //StrictMode is a component that wraps the BrowserRouter component and provides additional checks and warnings for the App component.
  //The StrictMode component is imported from the react package
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CatergoriesProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </CatergoriesProvider>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>
)
