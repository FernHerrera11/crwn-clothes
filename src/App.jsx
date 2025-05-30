
import Home from './routes/home/home.component';
//Routes and Route are components that are imported from the react-router-dom package.
//Routes is a component that wraps the Route components and provides the routing functionality to the Route components.
import {Routes, Route} from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import SignIn from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';



const App = () => {
  
  return (
    
      <Routes>
        <Route path='/' element={<Navigation />} >
          <Route index element={<Home />} />
          <Route path='shop/*' element={<Shop />} />
          <Route path='auth' element={<SignIn />} />
          <Route path='checkout' element={<Checkout />} />
        </Route>
      </Routes>
    

   
  
  );
}

export default App;
