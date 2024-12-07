import { ProductsToDisplay, useCart } from '../../../../hooks/useCart';

export const ProductsChcekoutList = () => {
  const { setCartEntities, productsToDisplay, sumPrice } = useCart();

  const onClickDeleteEntity = (id: ProductsToDisplay['productId']) => {
    setCartEntities(cartEntities => cartEntities.filter((entity) => entity.productId !== id));
  };

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
