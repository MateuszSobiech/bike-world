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

export const App = () => {
  return (
    <div className='grid min-h-screen grid-rows-[auto_1fr_auto]'>
      <BrowserRouter>
        <FilterContextProvider>
          <CartProvider>
            <Header />
            <Routes>
              <Route path='/' element={<Shop />} />
              <Route path='/zaloguj' element={<Login />} />
              <Route path='/rejestracja' element={<Register />} />
              <Route path='/koszyk'> 
                <Route index  element={<Cart />}  />
                <Route path='dane-wysylki' element={<Shipping />}  />
                <Route path='potwierdzenie' element={<Confirmation />}  />
              </Route>
            </Routes>
            <Footer />
          </CartProvider>
        </FilterContextProvider>
      </BrowserRouter>
    </div>
  );
};
