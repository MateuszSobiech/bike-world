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
    <div className='max-h-max hover:shadow-2xl rounded-md p-4 text-center relative min-h-[440px] flex flex-col justify-between'>
      <img className='h-auto w-[330px]' src={product.image} alt={product.name} />
      <div className='flex flex-col gap-4'>
        <p className='text-2xl font-bold'>{product.name}</p>
        <p className='text-gray-500'>{product.description}</p>
        <div className='flex gap-2 justify-center items-end'>
          {product.onSale && <span className='bias-line'>{product.price.toFixed(2)} zł</span>}
          <span className='text-green-600 font-bold text-2xl'>{price.toFixed(2)} zł</span>
        </div>
        <button
          onClick={onClickAddProductToCart}
          className='p-2 px-4 mx-auto bg-black text-white hover:text-blue-600 rounded w-max  text-xl '
        >
          Dodaj do koszyka
        </button>
      </div>
      {product.onSale && (
        <p className='absolute top-0 right-0 bg-gray-700 text-blue-400 py-1 px-2 rounded'>
          Promocja
        </p>
      )}
    </div>
  );
};
