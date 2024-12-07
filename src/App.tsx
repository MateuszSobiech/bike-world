import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Shop } from './components/Routes/Shop/Shop';
import { Cart } from './components/Routes/Cart/Cart';
import { FilterContextProvider } from './contexts/FilterContextProvider';
import { CartProvider } from './contexts/CartProvider';
import { Login } from './components/Routes/Login/Login';
import { Shipping } from './components/Routes/Shipping/Shipping';
import { Confirmation } from './components/Routes/Confirmation/Confirmation';
import { Register } from './components/Routes/Register/Register';
import { AuthProvider } from './contexts/AuthProvider';
import { ProductsProvider } from './contexts/ProductsProvider';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

export const App = () => {
  const initialOptions = {
    clientId: 'AY0wsVAv5SQCG4IyjCVOddoAlCgZj1aZ5-woFhkUUUe9L5EJWtgPNu6O4DNeJQTv7QL2AMKgS_YC7W9E',
    currency: 'PLN',
    intent: 'capture',
    // Add other options as needed
  };

  return (
    <div className='grid min-h-screen grid-rows-[auto_1fr_auto]'>
      <BrowserRouter>
        <AuthProvider>
          <ProductsProvider>
            <FilterContextProvider>
              <CartProvider>
                <PayPalScriptProvider options={initialOptions}>
                  <Header />
                  <Routes>
                    <Route path='/' element={<Shop />} />
                    <Route path='/zaloguj' element={<Login />} />
                    <Route path='/rejestracja' element={<Register />} />
                    <Route path='/koszyk'>
                      <Route index element={<Cart />} />
                      <Route path='dane-wysylki' element={<Shipping />} />
                      <Route path='potwierdzenie' element={<Confirmation />} />
                    </Route>
                  </Routes>
                  <Footer />
                </PayPalScriptProvider>
              </CartProvider>
            </FilterContextProvider>
          </ProductsProvider>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
};
