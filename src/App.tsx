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
  // ustawienia początkowe dla PayPala
  const initialOptions = {
    clientId: 'AXx-LpolDohs9253o5uivqPW11azCzR6OvMq5DL8NcoVvi50ktZ5L_UoWZoxIcBBA1UG4Jn_jTE9N8h7',
    currency: 'PLN',
    intent: 'capture',
  };

  return (
    <div className='grid min-h-screen grid-rows-[auto_1fr_auto]'>
      {/* Providery bibliotek */}
      <BrowserRouter>
        <PayPalScriptProvider options={initialOptions}>
          {/* Nasze Providery */}
          <AuthProvider>
            <ProductsProvider>
              <FilterContextProvider>
                <CartProvider>
                  <Header />
                  {/* Odpowiada za zmianę widoków */}
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
                </CartProvider>
              </FilterContextProvider>
            </ProductsProvider>
          </AuthProvider>
        </PayPalScriptProvider>
      </BrowserRouter>
    </div>
  );
};
