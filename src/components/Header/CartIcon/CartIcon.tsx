import { useCartContext } from '../../../contexts/CartProvider';

export const CartIcon = () => {
  const { cartEntities } = useCartContext();

  return (
    <div className='relative text-xl flex items-center gap-2 pr-6 max-sm:p-0'>
      <i className='fa-solid fa-cart-shopping text-2xl'></i>
      <p>Koszyk</p>
      {Boolean(cartEntities.length) && <p className='bg-blue-400 text-white absolute top-0 right-0 rounded-full px-[5px] text-sm max-sm:top-[-4px] max-sm:right-[-18px]'>{cartEntities.length}</p>}
    </div>
  );
};
