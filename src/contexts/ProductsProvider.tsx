import { collection, getDocs } from 'firebase/firestore';
import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';
import { db } from '../firebase/firebase';

export interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  price: number;
  image: string;
  onSale: boolean;
  saleAmount: number;
}

interface ProductsContextValue {
  products: Product[];
  categories: string[];
}

const ProductsContext = createContext<ProductsContextValue | undefined>(undefined);

export const ProductsProvider = ({ children }: PropsWithChildren) => {
  const [products, setProducts] = useState<Product[]>([]);
  const categories = ['wszystkie', ...new Set(products.map((product) => product.category))];

  useEffect(() => {
    const getProducts = async () => {
      const colRef = collection(db, 'products');
      const docsSnap = await getDocs(colRef);
      const storeProducts = docsSnap.docs.map((doc) => doc.data() as Product);

      setProducts(storeProducts);
    };

    getProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ products, categories }}>{children}</ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  const context = useContext(ProductsContext);

  if (context === undefined) {
    throw new Error('Can not use context out of Provider');
  }

  return context;
};
