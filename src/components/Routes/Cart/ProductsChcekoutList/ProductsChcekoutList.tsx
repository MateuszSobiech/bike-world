import { ProductsToDisplay, useCart } from '../../../../hooks/useCart';

export const ProductsChcekoutList = () => {
  const { setCartEntities, productsToDisplay, sumPrice } = useCart();

  const onClickDeleteEntity = (id: ProductsToDisplay['productId']) => {
    setCartEntities((cartEntities) => cartEntities.filter((entity) => entity.productId !== id));
  };

  return (
    <ul>
      {productsToDisplay.map((product) => {
        const price = product.price - product.saleAmount;

        return (
          <li
            key={product.productId}
            className='flex items-center justify-between max-sm:mb-8 max-sm:flex-col max-sm:gap-4 max-sm:border-b max-sm:pb-4'
          >
            <div>
              <img className='w-80' src={product.image} alt={product.image} />
            </div>

            <div>
              <p className='text-2xl'>{product.name}</p>
            </div>

            <div className='flex items-center gap-4'>
              <p className='text-3xl max-sm:text-2xl'>
                {product.amount} x {price.toFixed(2)} zł
              </p>
              <button onClick={() => onClickDeleteEntity(product.productId)}>
                <i className='fa-regular fa-trash-can text-3xl text-red-500'></i>
              </button>
            </div>
          </li>
        );
      })}

      <li className='mt-8 flex justify-end border-t pt-4 text-3xl max-sm:justify-center max-sm:border-t-0 max-sm:text-2xl'>
        <p>Łączna cena: {sumPrice.toFixed(2)} zł</p>
      </li>
    </ul>
  );
};
