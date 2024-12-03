import { Product } from '../../../../data/products';
import { useCartContext } from '../../../../contexts/CartProvider';

interface Props {
  product: Product;
}

export const Bike = ({ product }: Props) => {
  const { setCartEntities } = useCartContext();

  const price = product.onSale ? product.price - product.saleAmount : product.price;

  const onClickAddProductToCart = () => {
    setCartEntities((currentEntities) => {
      const hasEntity = currentEntities.some((entity) => entity.productId === product.id);

      if (hasEntity) {
        return currentEntities.map((entity) => {
          if (entity.productId !== product.id) return entity;

          return {
            ...entity,
            amount: entity.amount + 1,
          };
        });
      }

      return [...currentEntities, { productId: product.id, amount: 1 }];
    });
  };

  return (
    <div className='relative flex h-[-moz-max-content] max-h-max min-h-[440px] flex-col justify-between rounded-md p-4 text-center hover:shadow-2xl'>
      <img className='h-auto w-[330px]' src={product.image} alt={product.name} />
      <div className='flex flex-col gap-4'>
        <p className='text-2xl font-bold'>{product.name}</p>
        <p className='text-gray-500'>{product.description}</p>
        <div className='flex items-end justify-center gap-2'>
          {product.onSale && <span className='bias-line'>{product.price.toFixed(2)} zł</span>}
          <span className='text-2xl font-bold text-green-600'>{price.toFixed(2)} zł</span>
        </div>
        <button
          onClick={onClickAddProductToCart}
          className='mx-auto w-max rounded bg-black p-2 px-4 text-xl text-white hover:text-blue-600'
        >
          Dodaj do koszyka
        </button>
      </div>
      {product.onSale && (
        <p className='absolute right-0 top-0 rounded bg-gray-700 px-2 py-1 text-blue-400'>
          Promocja
        </p>
      )}
    </div>
  );
};
