import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Product } from '../data/products';
import { useAuthContext } from './AuthProvider';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';

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
  const user = useAuthContext();
  const [cartEntities, setCartEntities] = useState<CartEntity[]>([]);

  useEffect(() => {
    if (user) {
      setCartEntities(user.order);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      const docRef = doc(db, 'users', user.uid);
      updateDoc(docRef, { order: cartEntities });
    }
  }, [cartEntities]);

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
