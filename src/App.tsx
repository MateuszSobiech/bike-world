import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Shop } from './components/Routes/Shop/Shop';
import { Cart } from './components/Routes/Cart/Cart';
import { FilterContextProvider } from './contexts/FilterContextProvider';
import { CartProvider } from './contexts/CartProvider';

export const App = () => {
  return (
    <BrowserRouter>
      <FilterContextProvider>
        <CartProvider>
          <Header />
          <Routes>
            <Route path='/' element={<Shop />} />
            <Route path='/koszyk' element={<Cart />} />
          </Routes>
          <Footer />
        </CartProvider>
      </FilterContextProvider>
    </BrowserRouter>
  );
};
