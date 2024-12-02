import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react';
import { Product } from '../data/products';

interface Props {
  children: ReactNode;
}

export interface CartEntity {
  productId: Product['id'];
  amount: number;
}

interface CartProviderValues {
  cartEntities: CartEntity[];
  setCartEntities: Dispatch<SetStateAction<CartEntity[]>>;
}

const CartContext = createContext<CartProviderValues | null>(null);

export const CartProvider = ({ children }: Props) => {
  const [cartEntities, setCartEntities] = useState<CartEntity[]>([{ amount: 3, productId: 0 }]);

  return (
    <CartContext.Provider value={{ cartEntities, setCartEntities }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);

  if (context === null) {
    throw new Error('Can not use context out of Provider');
  }

  return context;
};
