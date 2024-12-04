import { useEffect, useState } from 'react';
import { useCartContext } from '../../../../contexts/CartProvider';
import { useProductsContext } from '../../../../contexts/ProductsProvider';
import { Product } from '../../../../data/products';
import { Order } from '../../../../firebase/auth';

interface ProductsToDisplay extends Order, Product {}

export const ProductsChcekoutList = () => {
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

  const onClickDeleteEntity = (id: ProductsToDisplay['productId']) => {
    setCartEntities(cartEntities.filter((entity) => entity.productId !== id));
  };

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

  return (
    <ul>
      {productsToDisplay.map((product) => {
        const price = product.price - product.saleAmount;

        return (
          <li key={product.productId} className='flex items-center justify-between'>
            <div>
              <img className='w-80' src={product.image} alt={product.image} />
            </div>

            <div>
              <p className='text-2xl'>{product.name}</p>
            </div>

            <div className='flex items-center gap-4'>
              <p className='text-3xl'>
                {product.amount} x {price.toFixed(2)} zł
              </p>
              <button onClick={() => onClickDeleteEntity(product.productId)}>
                <i className='fa-regular fa-trash-can text-3xl'></i>
              </button>
            </div>
          </li>
        );
      })}

      <li className='flex justify-end text-3xl'>
        <p>Łączna cena: {sumPrice.toFixed(2)} zł</p>
      </li>
    </ul>
  );
};
