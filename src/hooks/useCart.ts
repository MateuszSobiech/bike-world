import { useEffect, useState } from 'react';
import { useCartContext } from '../contexts/CartProvider';
import { useProductsContext } from '../contexts/ProductsProvider';
import { Order } from '../firebase/auth';
import { Product } from '../data/products';

export interface ProductsToDisplay extends Order, Product {}

export const useCart = () => {
  const products = useProductsContext();
  const { cartEntities, setCartEntities } = useCartContext();
  const [productsToDisplay, setProductsToDisplay] = useState<ProductsToDisplay[]>([]);

  const sumPrice =
    productsToDisplay.length > 0
      ? productsToDisplay.reduce(
          (state, product) => state + (product.price - product.saleAmount) * product.amount,
          0
        )
      : 0;

  useEffect(() => {
    if (products.length === 0) return;

    const toDisplay = cartEntities.map((entity) => {
      const product = products.find((product) => product.id === entity.productId)!;

      return {
        ...entity,
        ...product,
      };
    });

    setProductsToDisplay(toDisplay);
  }, [products, cartEntities]);

  return { setCartEntities, productsToDisplay, sumPrice };
};
