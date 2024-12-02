import { CartEntity, useCartContext } from '../../../../contexts/CartProvider';
import { Product, products } from '../../../../data/products';

interface ProductsToDisplay extends CartEntity {
  image: Product['image'];
  name: Product['name'];
  price: Product['price'];
  saleAmount: Product['saleAmount'];
}

export const ProductsChcekoutList = () => {
  let sumPrice = 0;
  const { cartEntities, setCartEntities } = useCartContext();

  const productsToDisplay: ProductsToDisplay[] = cartEntities.map((entity) => {
    const { image, name, price, saleAmount } = products.find(
      (product) => product.id === entity.productId
    )!;

    return {
      ...entity,
      image,
      name,
      price,
      saleAmount,
    };
  });

  const onClickDeleteEntity = (id: ProductsToDisplay['productId']) => {
    setCartEntities(cartEntities.filter((entity) => entity.productId !== id));
  };

  return (
    <ul>
      {productsToDisplay.map((product) => {
        const price = product.price - product.saleAmount;
        sumPrice += price * product.amount;

        return (
          <li key={product.productId} className='flex items-center justify-between'>
            <div>
              <img className='w-80' src={product.image} alt={product.image} />
            </div>

            <div>
              <p className='text-2xl'>{product.name}</p>
            </div>

            <button
              className='flex cursor-pointer items-center gap-4'
              onClick={() => onClickDeleteEntity(product.productId)}
            >
              <p className='text-3xl'>
                {product.amount} x {price.toFixed(2)} zł
              </p>
              <i className='fa-regular fa-trash-can text-3xl'></i>
            </button>
          </li>
        );
      })}

      <li className='flex justify-end text-3xl'>
        <p>Łączna cena: {sumPrice.toFixed(2)} zł</p>
      </li>
    </ul>
  );
};
