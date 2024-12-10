import { Link } from 'react-router-dom';
import { useCartContext } from '../../../contexts/CartProvider';
import { ProductsChcekoutList } from './ProductsChcekoutList/ProductsChcekoutList';

export const Cart = () => {
  const { cartEntities } = useCartContext();
  const hasEntities = cartEntities.length > 0;

  return (
    <div className='flex justify-center p-4'>
      <div className='w-2/3 max-sm:w-full max-sm:p-6'>
        <h2 className='mb-8 border-b pb-4 text-center text-3xl max-sm:text-2xl'>
          Podsumowanie koszyka
        </h2>

        {hasEntities ? (
          <ProductsChcekoutList />
        ) : (
          <div className='text-center text-2xl max-sm:text-xl'>
            <h3>Brak produktów</h3>
            <Link className='text-blue-600' to='/'>
              Przejdź do strony sklepu
            </Link>
          </div>
        )}

        {hasEntities && (
          <div className='flex justify-center'>
            <Link
              to='dane-wysylki'
              className='mt-16 rounded-lg border bg-blue-500 p-4 text-center text-3xl max-sm:p-2 max-sm:text-2xl'
            >
              Dane do wysyłki
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
